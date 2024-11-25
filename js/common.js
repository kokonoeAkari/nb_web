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

export {removeSectionTitle, setSectionTitle, switchSectionTitle}