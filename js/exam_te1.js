(function () {
    // 子頁初始化邏輯
    console.log('exam_te1.js loaded');
})();

// exam_te1.js
import {
    removeSectionTitle,
    setSectionTitle,
    switchSectionTitle,
    removeFormData,
    removeFormScore
} from './common.js';

const sectionNames = [
    "Section I", "Section II", "Section III", "Section IV",
    "Section V", "Section VI", "Section VII", "Section VIII",
    "Section IX", "Section ALL"
];
const sectionData = sectionNames.map(name =>
    `json/test_1/${name === "Section ALL" ? "section_all" : name.toLowerCase().replace(" ", "")}.json`
);
const sectionAnswers = sectionNames.map(name =>
    `json/test_1/ans/${name === "Section ALL" ? "section_all" : name.toLowerCase().replace(" ", "")}.json`
);

let questionKeys = new Set();
let eventHandlers = [];

function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

function createOptions(options, name) {
    const container = createElement('div', 'pm-question-options');
    Object.entries(options).forEach(([key, value]) => {
        const wrapper = createElement('div', 'pm-question-options-div');
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `${name}${key}`;
        input.name = name;
        input.value = key;

        const icn = document.createElement('span');
        icn.className = 'pm-question-options-icn';

        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        label.textContent = `${key}. ${value}`;

        wrapper.append(input, icn, label);
        container.appendChild(wrapper);
    });
    return container;
}

function loadQuestion(url, title) {
    $.getJSON(url).done(data => {
        const questions = data[title][1];
        const container = document.getElementById('pm-question-form');
        container.innerHTML = '';
        questionKeys.clear();

        Object.entries(questions).forEach(([key, q]) => {
            questionKeys.add(key);
            const block = createElement('div', 'pm-question-block');
            block.append(
                createElement('div', 'pm-question-desc', `${key}. ${q.desc}`),
                createElement('div', 'pm-question-ques', `Question: ${q.question}`),
                createOptions(q.options, key)
            );
            container.appendChild(block);
        });

        const btnWrapper = createElement('div', 'formBTN');
        const submitBtn = createElement('button');
        submitBtn.type = 'submit';
        submitBtn.id = 'confirmAns';
        submitBtn.textContent = 'Confirming Answers';

        const resetBtn = createElement('button');
        resetBtn.type = 'reset';
        resetBtn.id = 'resetAns';
        resetBtn.textContent = 'Resetting Answers';
        resetBtn.disabled = true;

        btnWrapper.append(submitBtn, resetBtn);
        container.appendChild(btnWrapper);
    });
}

function markAnswer(title, answerUrl, userAnswers) {
    $.getJSON(answerUrl).done(data => {
        const correctAnswers = data[title];
        const blocks = document.querySelectorAll('.pm-question-block');
        const optionBlocks = document.querySelectorAll('.pm-question-options');
        let correct = 0, wrong = 0;

        [...questionKeys].forEach((key, idx) => {
            const correctAns = correctAnswers[key];
            const userAns = userAnswers[key];
            const options = optionBlocks[idx].childNodes;

            if (userAns === correctAns) {
                const correctOption = options[['A', 'B', 'C', 'D'].indexOf(correctAns)];
                correctOption.classList.add('correct', 'answered');
                correct++;
            } else {
                if (correctAns) {
                    const correctOption = options[['A', 'B', 'C', 'D'].indexOf(correctAns)];
                    correctOption.classList.add('correct');
                }
                if (userAns) {
                    const wrongOption = options[['A', 'B', 'C', 'D'].indexOf(userAns)];
                    wrongOption.classList.add('incorrect');
                }
                wrong++;
            }
        });

        if (title === 'Section ALL') displayScore(correct, wrong);
        toggleForm(true);
        setTimeout(() => document.getElementById("pm-score").scrollIntoView({ behavior: "smooth" }), 300);
    });
}

function displayScore(correct, wrong) {
    const total = ((correct / (correct + wrong)) * 100).toFixed(2);
    document.getElementById('pm-score-t').textContent = `Correct Sub-Items: ${correct}`;
    document.getElementById('pm-score-f').textContent = `Incorrect Sub-Items: ${wrong}`;
    document.getElementById('pm-score-total').textContent = `Score: ${total}`;
    document.getElementById('pm-score').classList.add('showSC');
}

function toggleForm(isSubmitted) {
    document.getElementById('confirmAns').disabled = isSubmitted;
    document.getElementById('resetAns').disabled = !isSubmitted;
    document.querySelectorAll('input').forEach(input => input.disabled = isSubmitted);
}

function getAnswer(section, userAnswers) {
    if (section === "Comprehensive Testing") section = "Section ALL";
    const index = sectionNames.indexOf(section);
    const ansUrl = sectionAnswers[index];
    markAnswer(section, ansUrl, userAnswers);
}

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
    questionKeys.clear();
    const backTitle = document.getElementById("pm-question-titleBTN");
    const myform = document.querySelector('form');

    // 綁定 section 按鈕
    ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6", "sec7", "sec8", "sec9", "seca"].forEach((id, idx) => {
        setupSectionClick(id, idx);
    });

    const backHandler = () => {
        removeFormData();
        removeSectionTitle();
        removeFormScore();
        questionKeys.clear();
    };
    backTitle.addEventListener('click', backHandler);
    eventHandlers.push({ el: backTitle, type: "click", handler: backHandler });

    const submitHandler = (e) => {
        e.preventDefault();
        const userAns = {};
        questionKeys.forEach(key => {
            const selected = document.querySelector(`input[name='${key}']:checked`);
            userAns[key] = selected ? selected.value : null;
        });
        const title = document.getElementById('sectionTitle').textContent;
        getAnswer(title, userAns);
    };
    myform.addEventListener('submit', submitHandler);
    eventHandlers.push({ el: myform, type: 'submit', handler: submitHandler });

    const resetHandler = () => {
        toggleForm(false);
        document.querySelectorAll('.pm-question-block, .pm-question-options > div').forEach(el => el.removeAttribute('style'));
        document.querySelectorAll('.pm-question-block, .pm-question-options > div').forEach(el => el.classList.remove('correct', 'incorrect', 'answered'));
        removeFormScore();
        myform.reset();
    };
    myform.addEventListener('reset', resetHandler);
    eventHandlers.push({ el: myform, type: 'reset', handler: resetHandler });
}

function cleanup() {
    eventHandlers.forEach(({ el, type, handler }) => el.removeEventListener(type, handler));
    eventHandlers = [];
    questionKeys.clear();
}

export { init, cleanup };
