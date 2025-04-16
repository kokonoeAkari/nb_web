function removeSectionTitle(){
    document.getElementById("pm-content").style.cssText="display: none;";
    document.getElementById("pm-section-content").style.cssText="display: block;";
    let sectionTitle = document.getElementById("sectionTitle");
    sectionTitle.remove();
}

function setSectionTitle(SectionName){
    let sectionTitle = document.getElementById("pm-question-title-section");
    let newTitle = document.createElement("div");
    newTitle.setAttribute("id", "sectionTitle");
    let textNode = document.createTextNode(SectionName);
    newTitle.appendChild(textNode);
    sectionTitle.appendChild(newTitle);
}

function switchSectionTitle(){
    document.getElementById("pm-content").style.cssText="display: block;";
    document.getElementById("pm-section-content").style.cssText="display: none;";
}

function removeFormData(){
    let formData = document.getElementById("pm-question-form");
    while (formData.hasChildNodes()){
        formData.removeChild(formData.firstChild);
    }

}

function removeFormScore(){
    let tb = document.getElementById("pm-score-t");
    let fb = document.getElementById("pm-score-f");
    let tob = document.getElementById("pm-score-total");
    if(tb.hasChildNodes()){
        tb.removeChild(tb.firstChild);
    }
    if(fb.hasChildNodes()){
        fb.removeChild(fb.firstChild);
    }
    if(tob.hasChildNodes()){
        tob.removeChild(tob.firstChild);
    }
    let scb = document.getElementsByClassName("pm-score");
    for (let i=0;i<scb.length;i++){
        var x = scb[i];
        if (x.classList.contains('showSC')) {
            x.classList.remove('showSC');
        }
    }
}

export {removeSectionTitle, setSectionTitle, switchSectionTitle, removeFormData, removeFormScore}