// Matching item
import {removeSectionTitle, setSectionTitle, switchSectionTitle, removeFormData, removeFormScore} from './common.js';

const section_data = [
    '../json/test_2/section_all.json',
    '../json/test_2/section1.json',
    '../json/test_2/section2.json',
    '../json/test_2/section3.json',
    '../json/test_2/section4.json',
    '../json/test_2/section5.json',
    '../json/test_2/section6.json',
    '../json/test_2/section7.json',
    '../json/test_2/section8.json',
    '../json/test_2/section9.json'
];

const section_ans = [
    '../json/test_2/ans/section_all.json',
    '../json/test_2/ans/section1.json',
    '../json/test_2/ans/section2.json',
    '../json/test_2/ans/section3.json',
    '../json/test_2/ans/section4.json',
    '../json/test_2/ans/section5.json',
    '../json/test_2/ans/section6.json',
    '../json/test_2/ans/section7.json',
    '../json/test_2/ans/section8.json',
    '../json/test_2/ans/section9.json'
];

const sec1_MI = document.getElementById("sec1");
const sec2_MI = document.getElementById("sec2");
const sec3_MI = document.getElementById("sec3");
const sec4_MI = document.getElementById("sec4");
const sec5_MI = document.getElementById("sec5");
const sec6_MI = document.getElementById("sec6");
const sec7_MI = document.getElementById("sec7");
const sec8_MI = document.getElementById("sec8");
const sec9_MI = document.getElementById("sec9");
const seca_MI = document.getElementById("seca");

const backTitle = document.getElementById("pm-question-titleBTN");
const myform = document.querySelector("form");

var qtNum = [];

function createQT(className, myText){
    let x = document.createElement("div");
    x.setAttribute("class", className);
    let y = document.createTextNode(myText);
    x.appendChild(y);
    return x
}

function createOPT(op, ops, opName){
    let opLst = ["A", "B", "C", "D"];
    let count = 0;
    let cc = 0;
    let sb = document.createElement("div");
    sb.setAttribute("class", "pm-question-selectblock");
    for(let k in op){
        var opt = document.createElement("div");
        opt.setAttribute("class", "pm-question-options-selec");
        let d = document.createElement("div");
        let dText = document.createTextNode(op[k]);
        d.appendChild(dText);
        let ds = document.createElement("div");
        let s = document.createElement("select");
        s.setAttribute("name", opName+opLst[count]);
        s.setAttribute("id", opName+opLst[count]);
        let empo = document.createElement("option");
        let empoText = document.createTextNode("");
        empo.setAttribute("value","");
        empo.appendChild(empoText);
        s.appendChild(empo);
        for(let i in ops){
            let o = document.createElement("option");
            let oText = document.createTextNode(ops[i]);
            o.setAttribute("value", opLst[cc]);
            o.appendChild(oText);
            s.appendChild(o);
            cc++;
        }
        cc = 0;
        count++;
        ds.appendChild(s);
        opt.appendChild(d);
        opt.appendChild(ds);
        sb.appendChild(opt);
    }
    return sb
}

function loadQuestion(e, myTitle){
    $.getJSON(e)
        .done(function(data) {
            let jsondata = JSON.parse(JSON.stringify(data));
            let myQT = jsondata[myTitle][1];
            let mainBlock = document.getElementById("pm-question-form");
            for(let k in myQT){
                if(qtNum.indexOf(k)==-1){
                    qtNum.push(k);
                }
                let q = myQT[k];
                let qtBlock = document.createElement("div");
                qtBlock.setAttribute("class", "pm-question-block");
                let desc = createQT("pm-question-desc", k+". "+q["desc"]);
                let qt = createQT("pm-question-ques", "Question: "+q["question"]);
                let op = createOPT(q['option'], q["options"], k);
                qtBlock.appendChild(desc);
                qtBlock.appendChild(qt);
                qtBlock.appendChild(op);
                mainBlock.appendChild(qtBlock);
            }
            let formBtn = document.createElement("div");
            formBtn.setAttribute("class", "formBTN");
            let ansConfirm = document.createElement("button");
            let ansReset = document.createElement("button");
            ansConfirm.setAttribute("type", "submit");
            ansConfirm.setAttribute("id", "confirmAns");
            ansReset.setAttribute("type", "reset");
            ansReset.setAttribute("id", "resetAns");
            ansReset.disabled = true;
            let confirmText = document.createTextNode("確認答案");
            let resetText = document.createTextNode("重置答案");
            mainBlock.appendChild(formBtn).appendChild(ansConfirm).appendChild(confirmText);
            formBtn.appendChild(ansReset).appendChild(resetText);
    });
}

function markAns(myTitle, e, myans){
    $.getJSON(e)
        .done(function(data){
            let trueAns = data[myTitle];
            let op = document.querySelectorAll(".pm-question-options-selec");
            let t = 0;
            let f = 0;
            let c = 0;
            for(let k in trueAns){
                if(trueAns[k] == myans[k]){
                    op[c].style.backgroundColor = '#38f53859';
                    c++;
                    t++;
                }
                else{
                    op[c].style.backgroundColor = '#fd272759';
                    c++;
                    f++;
                }
            }
            if (myTitle == 'Section ALL'){
                let total = (100.00 / (t+f)) * t;
                total = total.toFixed(2);
                let tb = document.createElement("div");
                let tbText = document.createTextNode("答題正確題數： "+t+"題");
                let fb = document.createElement("div");
                let fbText = document.createTextNode("答題錯誤題數： "+f+"題");
                let tob = document.createElement("div");
                let tobText = document.createTextNode("總分: "+total+"分");
                tb.appendChild(tbText);
                fb.appendChild(fbText);
                tob.appendChild(tobText);
                document.getElementById("pm-score-t").appendChild(tb);
                document.getElementById("pm-score-f").appendChild(fb);
                document.getElementById("pm-score-total").appendChild(tob);
                document.getElementById("pm-score").classList.toggle("showSC");
            }
            formBtnEvent(true);
            //console.log(document.documentElement.offsetHeight);
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: "smooth"
            });
        }
    );
}

function getAns(e, ans){
    //console.log(e);
    switch(e){
        case 'Section I':
            var ansUrl = section_ans[1];
            break;
        case 'Section II':
            var ansUrl = section_ans[2];
            break;
        case 'Section III':
            var ansUrl = section_ans[3];
            break;
        case 'Section IV':
            var ansUrl = section_ans[4];
            break;
        case 'Section V':
            var ansUrl = section_ans[5];
            break;
        case 'Section VI':
            var ansUrl = section_ans[6];
            break;
        case 'Section VII':
            var ansUrl = section_ans[7];
            break;
        case 'Section VIII':
            var ansUrl = section_ans[8];
            break;
        case 'Section IX':
            var ansUrl = section_ans[9];
            break;
        case '綜合測驗':
            var ansUrl = section_ans[0];
            e = 'Section ALL';
            break;
        default:
            break;
    }
    markAns(e, ansUrl, ans);
}

function formBtnEvent(e){
    if (e){
        document.getElementById("confirmAns").disabled = true;
        document.getElementById("resetAns").disabled = false;
        let slt = document.querySelectorAll("select");
        for(let i=0;i<slt.length;++i){
            slt[i].disabled = true;
        }
    }
    else{
        document.getElementById("confirmAns").disabled = false;
        document.getElementById("resetAns").disabled = true;
        document.querySelectorAll("select").disabled = false;
        let slt = document.querySelectorAll("select");
        for(let i=0;i<slt.length;++i){
            slt[i].disabled = false;
        }
    }
}

sec1_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section I");
        switchSectionTitle();
        loadQuestion(section_data[1], "Section I");
    }
);
sec2_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section II");
        switchSectionTitle();
        loadQuestion(section_data[2], "Section II");
    }
);
sec3_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section III");
        switchSectionTitle();
        loadQuestion(section_data[3], "Section III");
    }
);
sec4_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section IV");
        switchSectionTitle();
        loadQuestion(section_data[4], "Section IV");
    }
);
sec5_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section V");
        switchSectionTitle();
        loadQuestion(section_data[5], "Section V");
    }
);
sec6_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VI");
        switchSectionTitle();
        loadQuestion(section_data[6], "Section VI");
    }
);
sec7_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VII");
        switchSectionTitle();
        loadQuestion(section_data[7], "Section VII");
    }
);
sec8_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section VIII");
        switchSectionTitle();
        loadQuestion(section_data[8], "Section VIII");
    }
);
sec9_MI.addEventListener(
    "click",
    function(){
        setSectionTitle("Section IX");
        switchSectionTitle();
        loadQuestion(section_data[9], "Section IX");
    }
);
seca_MI.addEventListener(
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

myform.addEventListener(
    "submit",
    (event) => {
        var myans = {};
        const data = new FormData(myform);
        for(let [key, value] of data.entries()) {
            //console.log(key+ ', '+ value);
            myans[key] = value;
        }
        let section = document.getElementById("sectionTitle").textContent;
        getAns(section, myans);
        event.preventDefault();
    }
);

myform.addEventListener(
    "reset",
    (event) => {
        formBtnEvent(false);
        let qtb = document.getElementById("pm-question-form").childNodes;
        let op = document.querySelectorAll(".pm-question-options-selec");
        for(let i=0;i<qtb.length;++i){
            if(qtb[i].hasAttribute('style')){
                qtb[i].removeAttribute('style');
            }
        }
        for(let i=0;i<op.length;++i){
            if(op[i].hasAttribute('style')){
                op[i].removeAttribute('style');
            }
            
        }
        removeFormScore();
        myform.reset();
    }
);