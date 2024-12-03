// Matching item
import {removeSectionTitle, setSectionTitle, switchSectionTitle, removeFormData} from './common.js';

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

function loadQuestion(e, myTitle){
    $.getJSON(e)
        .done(function(data) {
            //console.log(data);
            let jsondata = JSON.parse(JSON.stringify(data));
            console.log(jsondata[myTitle][0]);
    });
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