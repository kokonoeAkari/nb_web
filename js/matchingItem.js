// Matching item

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

sec1_MI.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[1], "Section I");
    }
);

loadQuestion(section_data[0], "Section ALL");

loadQuestion(section_data[2], "Section II");
loadQuestion(section_data[3], "Section III");
loadQuestion(section_data[4], "Section IV");
loadQuestion(section_data[5], "Section V");
loadQuestion(section_data[6], "Section VI");
loadQuestion(section_data[7], "Section VII");
loadQuestion(section_data[8], "Section VIII");
loadQuestion(section_data[9], "Section IX");