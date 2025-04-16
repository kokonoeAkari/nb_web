function removeSectionTitle() {
    const content = document.getElementById("pm-content");
    const sectionContent = document.getElementById("pm-section-content");
    const sectionTitle = document.getElementById("sectionTitle");

    fadeSwitch(content, sectionContent);

    if (sectionTitle) sectionTitle.remove();
}

function setSectionTitle(sectionName) {
    const titleContainer = document.getElementById("pm-question-title-section");

    if (titleContainer) {
        const newTitle = document.createElement("div");
        newTitle.id = "sectionTitle";
        newTitle.textContent = sectionName;
        titleContainer.appendChild(newTitle);
    }
}

function switchSectionTitle() {
    const content = document.getElementById("pm-content");
    const sectionContent = document.getElementById("pm-section-content");
    fadeSwitch(sectionContent, content);
}

function fadeSwitch(hideEl, showEl) {
    if (hideEl) {
        hideEl.classList.remove("show");
        hideEl.classList.remove("fade-in");
        hideEl.classList.add("fade-out");
    }

    if (showEl) {
        showEl.classList.remove("fade-out");
        showEl.classList.add("fade-in");

        // 強迫重排才能觸發動畫
        void showEl.offsetWidth;

        showEl.classList.add("show");
    }
}


function removeFormData() {
    const formData = document.getElementById("pm-question-form");
    if (formData) {
        formData.innerHTML = ""; // 更快、更乾淨的方式清空
    }
}

function removeFormScore() {
    const scoreIds = ["pm-score-t", "pm-score-f", "pm-score-total"];
    scoreIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = "";
    });

    const scoreBlocks = document.querySelectorAll(".pm-score");
    scoreBlocks.forEach(block => {
        block.classList.remove("showSC");
    });
}

export {
    removeSectionTitle,
    setSectionTitle,
    switchSectionTitle,
    removeFormData,
    removeFormScore
};
