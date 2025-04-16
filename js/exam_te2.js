(function () {
    // 子頁初始化邏輯
    console.log('exam_te2.js loaded');
})();


import {
    removeSectionTitle,
    setSectionTitle,
    switchSectionTitle,
    removeFormData,
    removeFormScore
} from './common.js';

// ---- Constants ---- //
const sectionNames = [
    "Section I", "Section II", "Section III",
    "Section IV", "Section V", "Section VI", "Section VII",
    "Section VIII", "Section IX", "Section ALL"
];

const sectionData = sectionNames.map(name =>
    `json/test_2/${name === "Section ALL" ? "section_all" : name.toLowerCase().replace(" ", "")}.json`
);
const sectionAnswers = sectionNames.map(name =>
    `json/test_2/ans/${name === "Section ALL" ? "section_all" : name.toLowerCase().replace(" ", "")}.json`
);

var qtNum = [];
let eventHandlers = [];

// ---- Utility: Create Element ---- //
function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

// ---- Create Question Block ---- //
function createOptionBlock(options, labels, namePrefix) {
    const block = createElement("div", "pm-question-selectblock");
    const keys = Object.keys(options);
    const letters = ["A", "B", "C", "D"];

    keys.forEach((key, index) => {
        const optContainer = createElement("div", "pm-question-options-selec");
        const desc = createElement("div", "pm-question-selec-desc", options[key]);
        const selectDiv = createElement("div", "pm-question-selec-options");
        const select = document.createElement("select");

        select.name = `${namePrefix}${letters[index]}`;
        select.id = select.name;

        const emptyOption = new Option("", "");
        select.appendChild(emptyOption);

        let labelArray = Array.isArray(labels) ? labels : Object.values(labels);
        labelArray.forEach((label, i) => {
            const option = new Option(label, letters[i]);
            select.appendChild(option);
        });

        selectDiv.appendChild(select);
        optContainer.appendChild(desc);
        optContainer.appendChild(selectDiv);
        block.appendChild(optContainer);
    });

    return block;
}

// ---- Load Questions ---- //
function loadQuestion(url, sectionTitle) {
    $.getJSON(url).done(data => {
        const questions = data[sectionTitle][1];
        const formContainer = document.getElementById("pm-question-form");

        Object.entries(questions).forEach(([key, q]) => {
            if (!qtNum.includes(key)) qtNum.push(key);

            const block = createElement("div", "pm-question-block");
            block.appendChild(createElement("div", "pm-question-desc", `${key}. ${q.desc}`));
            block.appendChild(createElement("div", "pm-question-ques", `Question: ${q.question}`));
            block.appendChild(createOptionBlock(q.option, q.options, key));
            block.appendChild(createElement("div", "pm-question-trueAnsBlockLog", "Correct Answer"));
            block.appendChild(createElement("div", "pm-question-trueAnsLog-block"));
            formContainer.appendChild(block);
        });

        // Buttons
        const btnContainer = createElement("div", "formBTN");
        const confirmBtn = createElement("button");
        confirmBtn.type = "submit";
        confirmBtn.id = "confirmAns";
        confirmBtn.textContent = "Confirming Answers";

        const resetBtn = createElement("button");
        resetBtn.type = "reset";
        resetBtn.id = "resetAns";
        resetBtn.textContent = "Resetting Answers";
        resetBtn.disabled = true;

        btnContainer.appendChild(confirmBtn);
        btnContainer.appendChild(resetBtn);
        formContainer.appendChild(btnContainer);
    });
}

// ---- Evaluate Answer ---- //
function markAnswer(sectionTitle, answerUrl, userAnswers) {
    console.log("sectionTitle", sectionTitle);
    $.getJSON(answerUrl).done(data => {
        const correctAnswers = data[sectionTitle];
        const selections = document.querySelectorAll(".pm-question-options-selec");
        const blocks = document.querySelectorAll(".pm-question-block");
        let correct = 0, wrong = 0, index = 0, blockIndex = 0;

        Object.keys(correctAnswers).forEach(key => {
            const userAns = userAnswers[key];
            const correctAns = correctAnswers[key];

            if (userAns === correctAns) {
                selections[index].style.backgroundColor = '#38f53859';
                correct++;
            } else {
                selections[index].style.backgroundColor = '#fd272759';
                //const correctText = selections[index].querySelectorAll("option")[["A", "B", "C", "D"].indexOf(correctAns)+1].text;
                const options = selections[index].querySelectorAll("option");
                const correctOption = Array.from(options).find(opt => opt.value === correctAns);
                const correctText = correctOption ? correctOption.text : '';
                const log = createAnswerLog(selections[index].querySelector(".pm-question-selec-desc").textContent, correctText);
                blocks[blockIndex].querySelector(".pm-question-trueAnsLog-block").appendChild(log);
                wrong++;
            }

            index++;
            if (index % 4 === 0) blockIndex++;
        });

        if (sectionTitle === "Section ALL") {
            const totalScore = ((correct / (correct + wrong)) * 100).toFixed(2);
            document.getElementById("pm-score-t").textContent = `Correct Sub-Items: ${correct}`;
            document.getElementById("pm-score-f").textContent = `Incorrect Sub-Items: ${wrong}`;
            document.getElementById("pm-score-total").textContent = `Score: ${totalScore}`;
            document.getElementById("pm-score").classList.toggle("showSC");
        }

        formBtnEvent(true);
        setTimeout(() => {
            document.getElementById("pm-score").scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
    });
}

function createAnswerLog(text, answer) {
    const container = createElement("div", "pm-question-trueans-block");
    container.appendChild(createElement("div", "pm-question-trueans-desc", text));
    container.appendChild(createElement("div", "pm-question-trueans-option", answer));
    return container;
}

// ---- Answer Getter ---- //
function getAnswer(section, userAnswers) {
    if (section === "Comprehensive Testing") section = "Section ALL";
    const index = sectionNames.indexOf(section);
    const ansUrl = sectionAnswers[index];
    const formattedSection = section === "Comprehensive Testing" ? "Section ALL" : section;
    markAnswer(formattedSection, ansUrl, userAnswers);
}

// ---- UI Events ---- //
function setupSectionClick(id, index) {
    const el = document.getElementById(id);
    const handler = () => {
        const title = sectionNames[index];
        setSectionTitle(title === "Section ALL" ? "Comprehensive Testing" : title);
        switchSectionTitle();
        loadQuestion(sectionData[index], title);
    };
    el.addEventListener("click", handler);
    eventHandlers.push({ el, type: "click", handler });
}

function init() {
    qtNum = [];
    const backTitle = document.getElementById("pm-question-titleBTN");
    const myform = document.querySelector("form");

    // Setup all section buttons
    ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6", "sec7", "sec8", "sec9", "seca"].forEach((id, idx) => {
        setupSectionClick(id, idx);
    });

    const backHandler = () => {
        removeFormData();
        removeSectionTitle();
        removeFormScore();
        qtNum = [];
    };
    backTitle.addEventListener('click', backHandler);
    eventHandlers.push({ el: backTitle, type: "click", handler: backHandler });

    const submitHandler = (e) => {
        e.preventDefault();
        const userAns = {};
        const formData = new FormData(myform);
        for (let [k, v] of formData.entries()) userAns[k] = v;
        const title = document.getElementById('sectionTitle').textContent;
        getAnswer(title, userAns);
    };
    myform.addEventListener('submit', submitHandler);
    eventHandlers.push({ el: myform, type: 'submit', handler: submitHandler });

    const resetHandler = () => {
        formBtnEvent(false);
        document.querySelectorAll(".pm-question-options-selec, .pm-question-block").forEach(el => el.removeAttribute("style"));
        document.querySelectorAll(".pm-question-trueAnsLog-block").forEach(log => (log.innerHTML = ""));
        removeFormScore();
        myform.reset();
    };
    myform.addEventListener('reset', resetHandler);
    eventHandlers.push({ el: myform, type: 'reset', handler: resetHandler });
}

function formBtnEvent(enableConfirm) {
    document.getElementById("confirmAns").disabled = enableConfirm;
    document.getElementById("resetAns").disabled = !enableConfirm;
    document.querySelectorAll("select").forEach(sel => sel.disabled = enableConfirm);
    document.querySelectorAll(".pm-question-trueAnsBlockLog").forEach(el => {
        el.classList.toggle("show", enableConfirm);
    });
}

function cleanup() {
    eventHandlers.forEach(({ el, type, handler }) => el.removeEventListener(type, handler));
    eventHandlers = [];
    qtNum = [];
}

export { init, cleanup };