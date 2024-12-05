// Multiple choice
import {removeSectionTitle, setSectionTitle, switchSectionTitle, removeFormData, removeFormScore} from './common.js';

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

var qtNum = [];

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
        //console.log(k);
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
                if(qtNum.indexOf(k)==-1){
                    qtNum.push(k);
                }
                let q = myQT[k];
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
            let ansReset = document.createElement("button");
            ansConfirm.setAttribute("type", "submit");
            ansConfirm.setAttribute("id", "confirmAns");
            ansReset.setAttribute("type", "reset");
            ansReset.setAttribute("id", "resetAns");
            ansReset.disabled = true;
            let confirmText = document.createTextNode("確認答案");
            let resetText = document.createTextNode("重置答案");
            mainBlock.appendChild(formBtn).appendChild(ansConfirm).appendChild(confirmText)
            formBtn.appendChild(ansReset).appendChild(resetText);
            //console.log(qtNum);
        }
    );
}

function markAns(myTitle, e, myans){
    $.getJSON(e)
        .done(function(data){
            let trueAns = data[myTitle];
            let qtb = document.getElementById("pm-question-form").childNodes;
            let op = document.querySelectorAll(".pm-question-options");
            let t = 0;
            let f = 0;
            let c = 0;
            //console.log("True ans: ",trueAns);
            for(let k in trueAns){
                if(trueAns[k] == myans[k]){
                    qtb[c].style.backgroundColor = '#38f53859';
                    c++;
                    t++;
                }
                else{
                    let w = op[c].childNodes;
                    switch(trueAns[k]){
                        case 'A':
                            w[0].style.backgroundColor = '#38f538';
                            break;
                        case 'B':
                            w[1].style.backgroundColor = '#38f538';
                            break;
                        case 'C':
                            w[2].style.backgroundColor = '#38f538';
                            break;
                        case 'D':
                            w[3].style.backgroundColor = '#38f538';
                            break;
                        default:
                            break;
                    }
                    switch(myans[k]){
                        case 'A':
                            w[0].style.backgroundColor = '#fd2727';
                            break;
                        case 'B':
                            w[1].style.backgroundColor = '#fd2727';
                            break;
                        case 'C':
                            w[2].style.backgroundColor = '#fd2727';
                            break;
                        case 'D':
                            w[3].style.backgroundColor = '#fd2727';
                            break;
                        default:
                            break;
                    }
                    qtb[c].style.backgroundColor = '#ff939359';
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
        let inp = document.querySelectorAll("input");
        for(let i=0;i<inp.length;++i){
            inp[i].disabled = true;
        }
    }
    else{
        document.getElementById("confirmAns").disabled = false;
        document.getElementById("resetAns").disabled = true;
        document.querySelectorAll("input").disabled = false;
        let inp = document.querySelectorAll("input");
        for(let i=0;i<inp.length;++i){
            inp[i].disabled = false;
        }
    }
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
        removeFormScore();
        qtNum = [];
    }
);

myform.addEventListener(
    "submit",
    (event) => {
        //const data = new FormData(myform);
        //for(let [key, value] of data.entries()) {console.log(key+ ', '+ value);}
        var myans = {};
        for(let i=0;i<qtNum.length;++i){
            let selectedRadio = document.querySelector('input[name="'+qtNum[i]+'"]:checked');
            let selectedValue = selectedRadio ? selectedRadio.value : null;
            myans[qtNum[i]] = selectedValue;
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
        let op = document.querySelectorAll(".pm-question-options");
        for(let i=0;i<qtb.length;++i){
            if(qtb[i].hasAttribute('style')){
                qtb[i].removeAttribute('style');
            }
        }
        for(let i=0;i<op.length;++i){
            let n = op[i].childNodes;
            for(let ii=0;ii<n.length;++ii){
                if(n[ii].hasAttribute('style')){
                    n[ii].removeAttribute('style');
                }
            }
        }
        removeFormScore();
        myform.reset();
    }
);