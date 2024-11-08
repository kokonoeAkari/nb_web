const section1_data = '../json/test_1/section1.json';
const section2_data = '../json/test_1/section2.json';
const section3_data = '../json/test_1/section3.json';
const section4_data = '../json/test_1/section4.json';
const section5_data = '../json/test_1/section5.json';
const section6_data = '../json/test_1/section6.json';
const section7_data = '../json/test_1/section7.json';
const section8_data = '../json/test_1/section8.json';
const section9_data = '../json/test_1/section9.json';
const sectionALL_data = '../json/test_1/section_all.json';

const sect1 = document.getElementById("sec1");
const sect2 = document.getElementById("sec2");
const sect3 = document.getElementById("sec3");
const sect4 = document.getElementById("sec4");
const sect5 = document.getElementById("sec5");
const sect6 = document.getElementById("sec6");
const sect7 = document.getElementById("sec7");
const sect8 = document.getElementById("sec8");
const sect9 = document.getElementById("sec9");
const secta = document.getElementById("secta");


function loadQuestion(e){
    $.getJSON(e, function( data ) {
        console.log(data);
    });
}

sect1.addEventListener(
    "click",
    function(){
        loadQuestion(section1_data);
    }
);

sect2.addEventListener(
    "click",
    function(){
        loadQuestion(section2_data);
    }
);

sect3.addEventListener(
    "click",
    function(){
        loadQuestion(section3_data);
    }
);

sect4.addEventListener(
    "click",
    function(){
        loadQuestion(section4_data);
    }
);

sect5.addEventListener(
    "click",
    function(){
        loadQuestion(section5_data);
    }
);

sect6.addEventListener(
    "click",
    function(){
        loadQuestion(section6_data);
    }
);

sect7.addEventListener(
    "click",
    function(){
        loadQuestion(section7_data);
    }
);

sect8.addEventListener(
    "click",
    function(){
        loadQuestion(section8_data);
    }
);

sect9.addEventListener(
    "click",
    function(){
        loadQuestion(section9_data);
    }
);

secta.addEventListener(
    "click",
    function(){
        loadQuestion(sectionALL_data);
    }
);