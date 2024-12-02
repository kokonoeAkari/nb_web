// Multiple choice
import {removeSectionTitle, setSectionTitle, switchSectionTitle, removeFormData} from './common.js';

const section_data = [
    '../json/test_1/section_all.json',
    '../json/test_1/section1.json',
    '../json/test_1/section2.json',
    '../json/test_1/section3.json',
    '../json/test_1/section4.json',
    '../json/test_1/section5.json',
    '../json/test_1/section6.json',
    '../json/test_1/section7.json',
    '../json/test_1/section8.json',
    '../json/test_1/section9.json'
];

const section_ans = [
    '../json/test_1/ans/section_all.json',
    '../json/test_1/ans/section1.json',
    '../json/test_1/ans/section2.json',
    '../json/test_1/ans/section3.json',
    '../json/test_1/ans/section4.json',
    '../json/test_1/ans/section5.json',
    '../json/test_1/ans/section6.json',
    '../json/test_1/ans/section7.json',
    '../json/test_1/ans/section8.json',
    '../json/test_1/ans/section9.json'
];

const sec1_MC = document.getElementById("sec1");
const sec2_MC = document.getElementById("sec2");
const sec3_MC = document.getElementById("sec3");
const sec4_MC = document.getElementById("sec4");
const sec5_MC = document.getElementById("sec5");
const sec6_MC = document.getElementById("sec6");
const sec7_MC = document.getElementById("sec7");
const sec8_MC = document.getElementById("sec8");
const sec9_MC = document.getElementById("sec9");
const seca_MC = document.getElementById("seca");

const backTitle = document.getElementById("pm-question-titleBTN");

const myform = document.querySelector("form");

myform.addEventListener(
    "submit",
    (event) => {
        const data = new FormData(myform);
        for(let [key, value] of data.entries()) {
            console.log(key+ ', '+ value);
        }
        event.preventDefault();
    }
);

function createQT(className, myText){
    let x = document.createElement("div");
    x.setAttribute("class", className);
    let y = document.createTextNode(myText);
    x.appendChild(y);
    return x
}

function createOPT(op, opName){
    //console.log(op, opName);
    let opt = document.createElement("div");
    opt.setAttribute("class", "pm-question-options");
    for(let k in op){
        let d = document.createElement("div");
        let i = document.createElement("input");
        i.setAttribute("type", "radio");
        i.setAttribute("id", opName+k);
        i.setAttribute("name", opName);
        i.setAttribute("value", k);
        let l = document.createElement("label");
        l.setAttribute("for", opName+k);
        let lText = document.createTextNode(k+'. '+op[k]);
        l.appendChild(lText);
        d.appendChild(i);
        d.appendChild(l);
        opt.appendChild(d);
    }
    return opt
}

function loadQuestion(e, myTitle){
    $.getJSON(e)
        .done(function(data) {
            //console.log(data);
            let jsondata = JSON.parse(JSON.stringify(data));
            //console.log(jsondata);
            //console.log(jsondata[myTitle][1]);
            let myQT = jsondata[myTitle][1];
            let mainBlock = document.getElementById("pm-question-form");
            for(let k in myQT){
                //console.log(k+ ', '+ myQT[k])
                let q = myQT[k]
                //for(let k_ in q){console.log(k_+ ', '+ q[k_])}
                let qtBlock = document.createElement("div");
                qtBlock.setAttribute("class", "pm-question-block");
                let desc = createQT("pm-question-desc", k+". "+q["desc"]);
                let qt = createQT("pm-question-ques", "Question: "+q["question"]);
                let op = createOPT(q["options"], k);
                qtBlock.appendChild(desc);
                qtBlock.appendChild(qt);
                qtBlock.appendChild(op);
                mainBlock.appendChild(qtBlock);
            }
            let formBtn = document.createElement("div");
            formBtn.setAttribute("class", "formBTN");
            let ansConfirm = document.createElement("button");
            ansConfirm.setAttribute("type", "submit");
            let ansText = document.createTextNode("確認答案");
            mainBlock.appendChild(formBtn).appendChild(ansConfirm).appendChild(ansText);
    });
}

sec1_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section I");
        switchSectionTitle();
        loadQuestion(section_data[1], "Section I");
    }
);
sec2_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section II");
        switchSectionTitle();
        loadQuestion(section_data[2], "Section II");
    }
);
sec3_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section III");
        switchSectionTitle();
        loadQuestion(section_data[3], "Section III");
    }
);
sec4_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section IV");
        switchSectionTitle();
        loadQuestion(section_data[4], "Section IV");
    }
);
sec5_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section V");
        switchSectionTitle();
        loadQuestion(section_data[5], "Section V");
    }
);
sec6_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VI");
        switchSectionTitle();
        loadQuestion(section_data[6], "Section VI");
    }
);
sec7_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VII");
        switchSectionTitle();
        loadQuestion(section_data[7], "Section VII");
    }
);
sec8_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VIII");
        switchSectionTitle();
        loadQuestion(section_data[8], "Section VIII");
    }
);
sec9_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("Section IX");
        switchSectionTitle();
        loadQuestion(section_data[9], "Section IX");
    }
);
seca_MC.addEventListener(
    "click",
    function(){
        setSectionTitle("綜合測驗");
        switchSectionTitle();
        loadQuestion(section_data[0], "Section ALL");
    }
);

backTitle.addEventListener(
    "click",
    function(){
        removeFormData();
        removeSectionTitle();
        myform.reset();
    }
);