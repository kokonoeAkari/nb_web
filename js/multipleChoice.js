// Multiple choice
import {removeSectionTitle, setSectionTitle, switchSectionTitle} from './common.js';

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

let backTitle = document.getElementById("pm-question-titleBTN");

function loadQuestion(e, myTitle){
    $.getJSON(e)
        .done(function(data) {
            //console.log(data);
            let jsondata = JSON.parse(JSON.stringify(data));
            console.log(jsondata[myTitle][0]);
            console.log(typeof jsondata);
            console.log(Object.keys(jsondata));
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
        removeSectionTitle();
    }
);