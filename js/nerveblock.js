(function () {
    // 子頁初始化邏輯
    console.log('nerveblock.js loaded');
})();


const bodyPart = ["Head & Neck", "Torso", "Leg", "Arm"];

const partBlocks = {
    "Head & Neck": ["Forehead", "Midface", "Jaw", "Neck", "Ear", "Occiput"],
    "Torso": ["Chest", "Abdominal Wall", "Perineum", "Upper Back", "Lower Back"],
    "Leg": ["Thigh (Anterior)", "Lower Leg (Anterior)", "Thigh (Posterior)", "Lower Leg (Posterior)", "Foot"],
    "Arm": ["Shoulder (Anterior)", "Proximal (Anterior)", "Forearm (Anterior)", "Hand (Anterior)", "Shoulder (Posterior)", "Proximal (Posterior)", "Forearm (Posterior)", "Hand (Posterior)"]
};
const strucArr = {
    "Head & Neck": {
        "Forehead": ["Supraorbital"],
        "Midface": ["Infraorbital"],
        "Jaw": ["Mental", "Inferior Alveolar"],
        "Neck": ["Superficial Cervical Plexus"],
        "Ear": ["Auricular"],
        "Occiput": ["Occipital"]
    },
    "Torso": {
        "Chest": ["PECS-II (Interpectoral plane and Pectoserratus plane block)", "Erector Spinae", "Serratus Anterior"],
        "Abdominal Wall": ["Rectus Sheath", "Transversus Abdominis Plane"],
        "Perineum": ["Perianal", "Penile"],
        "Upper Back": ["Erector Spinae"],
        "Lower Back": ["Perianal"]
    },
    "Leg": {
        "Thigh (Anterior)": ["PENG", "Lateral Femoral Cutaneous", "Femoral", "Fascia Iliaca"],
        "Lower Leg (Anterior)": ["Transgluteal Sciatic", "Saphenous", "Common Peroneal", "Popliteal Sciatic"],
        "Thigh (Posterior)": ["Transgluteal Sciatic"],
        "Lower Leg (Posterior)": ["Transgluteal Sciatic", "Saphenous", "Popliteal Sciatic"],
        "Foot": ["Transgluteal Sciatic", "Tibial", "Popliteal Sciatic"]
    },
    "Arm": {
        "Shoulder (Anterior)": ["Axillary Nerve", "Supraclavicular Brachial Plexus", "Interscalene Brachial Plexus"],
        "Proximal (Anterior)": ["Axillary Brachial Plexus", "Infraclavicular Brachial Plexus", "Axillary Nerve", "Supraclavicular Brachial Plexus", "Interscalene Brachial Plexus"],
        "Forearm (Anterior)": ["Axillary Brachial Plexus", "Medial Antebrachial Cutaneous", "Musculocutaneous", "Infraclavicular Brachial Plexus", "Supraclavicular Brachial Plexus", "Interscalene Brachial Plexus"],
        "Hand (Anterior)": ["Axillary Brachial Plexus", "Digital", "Ulnar", "Median", "Infraclavicular Brachial Plexus", "Supraclavicular Brachial Plexus", "Interscalene Brachial Plexus"],
        "Shoulder (Posterior)": ["Axillary Nerve", "Supraclavicular Brachial Plexus"],
        "Proximal (Posterior)": ["Axillary Brachial Plexus", "Infraclavicular Brachial Plexus", "Axillary Nerve", "Supraclavicular Brachial Plexus"],
        "Forearm (Posterior)": ["Axillary Brachial Plexus", "Medial Antebrachial Cutaneous", "Infraclavicular Brachial Plexus", "Supraclavicular Brachial Plexus"],
        "Hand (Posterior)": ["Axillary Brachial Plexus", "Digital", "Ulnar", "Radial", "Infraclavicular Brachial Plexus", "Supraclavicular Brachial Plexus"]
    }
};

const pageArr = {
    "Head & Neck": {
        "Supraorbital": "page/HaN/Supraorbital.html",
        "Infraorbital": "page/HaN/Infraorbital.html",
        "Mental": "page/HaN/Mental.html",
        "Inferior Alveolar": "page/HaN/InferiorAlveolar.html",
        "Superficial Cervical Plexus": "page/HaN/SuperficialCervicalPlexus.html",
        "Auricular": "page/HaN/Auricular.html",
        "Occipital": "page/HaN/Occipital.html"
    },
    "Torso": {
        "PECS-II (Interpectoral plane and Pectoserratus plane block)": "page/Torso/PECSII.html",
        "Erector Spinae": "page/Torso/ErectorSpinae.html",
        "Serratus Anterior": "page/Torso/SerratusAnterior.html",
        "Rectus Sheath": "page/Torso/RectusSheath.html",
        "Transversus Abdominis Plane": "page/Torso/TransversusAbdominisPlane.html",
        "Perianal": "page/Torso/Perianal.html",
        "Penile": "page/Torso/Penile.html"
    },
    "Leg": {
        "PENG": "page/Leg/PENG.html",
        "Lateral Femoral Cutaneous": "page/Leg/LateralFemoralCutaneous.html",
        "Femoral": "page/Leg/Femoral.html",
        "Fascia Iliaca": "page/Leg/FasciaIliaca.html",
        "Transgluteal Sciatic": "page/Leg/TransglutealSciatic.html",
        "Saphenous": "page/Leg/Saphenous.html",
        "Common Peroneal": "page/Leg/CommonPeroneal.html",
        "Popliteal Sciatic": "page/Leg/PoplitealSciatic.html",
        "Tibial": "page/Leg/Tibial.html"
    },
    "Arm": {
        "Axillary Nerve": "page/Arm/AxillaryNerve.html",
        "Supraclavicular Brachial Plexus": "page/Arm/SupraclavicularBrachialPlexus.html",
        "Interscalene Brachial Plexus": "page/Arm/InterscaleneBrachialPlexus.html",
        "Axillary Brachial Plexus": "page/Arm/AxillaryBrachialPlexus.html",
        "Infraclavicular Brachial Plexus": "page/Arm/InfraclavicularBrachialPlexus.html",
        "Medial Antebrachial Cutaneous": "page/Arm/MedialAntebrachialCutaneous.html",
        "Musculocutaneous": "page/Arm/Musculocutaneous.html",
        "Digital": "page/Arm/Digital.html",
        "Ulnar": "page/Arm/Ulnar.html",
        "Median": "page/Arm/Median.html",
        "Radial": "page/Arm/Radial.html"
    }
};

var nowBody = '';
var buttonValue = '';
var partListeners = [];

function loadBodyPart() {
    let html = bodyPart.map(part =>
        `<li><button class="bodyPartBTN" value="${part}">${part}</button></li>`
    ).join('');
    document.getElementById('nb-body-part-nav').innerHTML = `<ul>${html}</ul>`;

    const buttons = document.querySelectorAll('.bodyPartBTN');
    buttons.forEach(btn => {
        const listener = (event) => {
            buttons.forEach(b => b.classList.remove('selected'));
            event.target.classList.add('selected');
            nowBody = event.target.value;
            document.getElementById('nb-body-struc-nav').innerHTML = '';
            document.getElementById('nb-page-content').innerHTML = '';
            loadBlock(nowBody);
        };
        btn.addEventListener('click', listener);
        partListeners.push({ btn, listener });
    });
}

function regBTN(selector, type) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(btn => {
        const listener = (event) => {
            buttons.forEach(b => b.classList.remove('selected'));
            event.target.classList.add('selected');
            buttonValue = btn.value;
            if (type === 1) {
                document.getElementById('nb-page-content').innerHTML = '';
                loadStruc(buttonValue);
            } else if (type === 2) {
                loadModule(pageArr[nowBody][buttonValue]);
            }
        };
        btn.addEventListener('click', listener);
        partListeners.push({ btn, listener });
    });
}

function loadStruc(block) {
    const structures = strucArr[nowBody][block];
    const html = structures.map(s =>
        `<li><button class="StrucBlocksBTN" value="${s}">${s}</button></li>`
    ).join('');
    document.getElementById('nb-body-struc-nav').innerHTML = `<ul>${html}</ul>`;
    regBTN('.StrucBlocksBTN', 2);
}

function loadBlock(part) {
    const blocks = partBlocks[part];
    const html = blocks.map(b =>
        `<li><button class="PartBlocksBTN" value="${b}">${b}</button></li>`
    ).join('');
    document.getElementById('nb-body-blocks-nav').innerHTML = `<ul>${html}</ul>`;
    regBTN('.PartBlocksBTN', 1);
}

function loadModule(pagePath) {
    const container = $('#nb-page-content');
    const overlay = $('#loading-overlay');

    // 顯示 loading 遮罩
overlay.removeClass('hide');
    container.css('visibility', 'hidden');

        container.load(pagePath, function () {
        const images = container.find('img');
        let loadedCount = 0;
        
        if (images.length === 0) {
            done();
        } else {
            images.each(function () {
                if (this.complete) {
                    checkImages();
                } else {
                    $(this).on('load error', checkImages);
                }
            });
        }

        function checkImages() {
            loadedCount++;
            if (loadedCount === images.length) {
                setTimeout(() => {
                    done();
                }, 1500);
                
            }
        }

        function done() {
            overlay.addClass('hide');
            container.css('visibility', 'visible').addClass('fadein');
        }
    });
}

// 對外公開初始化與清除
export function init() {
    loadBodyPart();
}

export function cleanup() {
    console.log('nerveblock.js cleanup');
    // 移除所有事件監聽器
    partListeners.forEach(({ btn, listener }) => {
        btn.removeEventListener('click', listener);
    });
    partListeners = [];

    // 清除畫面 DOM
    document.getElementById('nb-body-part-nav').innerHTML = '';
    document.getElementById('nb-body-blocks-nav').innerHTML = '';
    document.getElementById('nb-body-struc-nav').innerHTML = '';
    document.getElementById('nb-page-content').innerHTML = '';

    nowBody = '';
    buttonValue = '';
}