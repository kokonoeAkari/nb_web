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

const sect1 = document.getElementById("sec1");
const sect2 = document.getElementById("sec2");
const sect3 = document.getElementById("sec3");
const sect4 = document.getElementById("sec4");
const sect5 = document.getElementById("sec5");
const sect6 = document.getElementById("sec6");
const sect7 = document.getElementById("sec7");
const sect8 = document.getElementById("sec8");
const sect9 = document.getElementById("sec9");
const seca = document.getElementById("seca");

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

function setSectionTitle(SectionName){
    let sectionTitle = document.getElementById("pm-question-title-section");
    let newTitle = document.createElement("div");
    newTitle.setAttribute("id", "sectionTitle");
    let textNode = document.createTextNode(SectionName);
    newTitle.appendChild(textNode);
    sectionTitle.appendChild(newTitle);
}

sect1.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[1], "Section I");
        setSectionTitle("Section I");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect2.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[2], "Section II");
        setSectionTitle("Section II");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect3.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[3], "Section III");
        setSectionTitle("Section III");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect4.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[4], "Section IV");
        setSectionTitle("Section IV");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect5.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[5], "Section V");
        setSectionTitle("Section V");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect6.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[6], "Section VI");
        setSectionTitle("Section VI");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect7.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[7], "Section VII");
        setSectionTitle("Section VII");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect8.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[8], "Section VIII");
        setSectionTitle("Section VIII");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

sect9.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[9], "Section IX");
        setSectionTitle("Section IX");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);

seca.addEventListener(
    "click",
    function(){
        loadQuestion(section_data[0], "Section ALL");
        setSectionTitle("綜合測驗");
        document.getElementById("pm-content").style.cssText="display: block;";
        document.getElementById("pm-section-content").style.cssText="display: none;";
    }
);