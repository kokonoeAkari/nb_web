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
        "Perineum": ["Perianal","Penile"],
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

/*
const HeadAndNeck = {
    2000: {
        "position": "Forehead (V1) Blocks",
        "struc": "Supraorbital",
        "Indications": "Trauma or need to perform painful procedure on area innervated by supraorbital nerve.",
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Distortion of anatomical landmarks"
        ],
        "Equipment": [
            "2-5cc of local anesthetic of choice",
            "Syringe",
            "Cleansing solution",
            "1.5 inch small gauge needle (25 or greater)"
        ],
        "Technique": {
            "non": [
                "1. Place patient in supine position or seated",
                "2. Draw up 2-5cc of anesthetic into syringe",
                "3. Palpate the supraorbital foramen over the medial aspect of the supraorbital ridge",
                "4. Prep area",
                "5. Advance the needle towards foramen (5-10mm)",
                "6. Aspirate, and if no blood, inject 1-3 cc of anesthetic slowly",
                "7. Massage area for 10-15 seconds",
                "8. If block is unsuccessful, inject a line of anesthetic solution along the orbital rim laterally to medially to block all branches of the ophthalmic nerve"
            ]
        }
    },
    2001: {
        "position": "Midface (V2) Blocks",
        "struc": "Infraorbital",
        "Indications": "Trauma or need to perform painful procedure on areas innervated by infraorbital nerve",
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Distortion of anatomical landmarks"
        ],
        "Equipment": [
            "2-5cc of local anesthetic of choice",
            "Syringe",
            "Cleansing solution",
            "1.5 inch small gauge needle (25 or greater)"
        ],
        "Preparation": {
            "Positioning": [
                "Have patient sitting up or laying down"
            ]
        },
        "Technique": {
            "Intraoral": [
                "1. Place patient in supine position or seated",
                "2. Apply anesthetic soaked q-tip to the mucosa opposite the upper second premolar (bicuspid) for 1 minute allowing for topical anesthesia",
                "3. Draw up 2-5cc of anesthetic into syringe",
                "4. Palpate the infraorbital foramen by having the patient look straight ahead and draw an imaginary line vertically from the pupil toward the inferior border of the infraorbital ridge, keep your finger on the foramen",
                "5. Retract the cheek and introduce the needle into the mucosa ~ 0.5cm from the buccal surface",
                "6. Advance the needle, keeping it parallel to the long axis of the bicuspid) until it is near the foramen (~1.5-2.5 cm)… do not advance too far as you may enter the orbit",
                "7. Aspirate, and if no blood, inject 4-5 cc of anesthetic slowly"
            ],
            "Extraoral": [
                "Place patient in supine position or seated",
                "Draw up 2-5cc of anesthetic into syringe (avoid epinephrine as you are very close to the facial artery while doing the block via this approach)",
                "Palpate the infraorbital foramen (step #4 above)",
                "Prep the overlying skin with betadine",
                "Insert the needle through the skin, subcutaneous tissue, and muscle",
                "Aspirate, if no blood, inject anesthetic slowly (the tissue will swell)",
                "Remove the needle and massage the area for 10-15 seconds"
            ]
        }
    },
    2002: {
        "position": "Jaw (V3) Blocks",
        "struc": "Mental",
        "Indications": "Trauma or need to perform painful procedure on area innervated by mental nerve",
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Distortion of anatomical landmarks"
        ],
        "Equipment": [
            "2-5cc of local anesthetic of choice",
            "Syringe",
            "Cleansing solution",
            "1.5 inch small gauge needle (25 or greater)"
        ],
        "Preparation": {
            "non": [
                "1. Place patient in semi-recumbent position",
                "2. Draw up 2-5cc of anesthetic into syringe",
                "3. Locate the mental foramen by retracting the cheek laterally and palpating between the 2 lower premolar teeth",
                "4. Insert the needle along the lower gum into the buccal fold between the premolar teeth without placing the needle directly into the foramen",
                "5. Aspirate; if no blood, inject a few cc's of anesthetic slowly (avoid injecting directly into the foramen as to prevent damage to the neurovascular bundle)",
                "6. For lacerations over the midline, block the mental nerve on each side of the face to anesthetize crossover fibers",
                "7. Block may also be performed extraorally by palpating and approaching the mandible slightly laterally to make contact just outside the mental foramen}"
            ]
        }
    },
    2003: {
        "position": "Jaw (V3) Blocks",
        "struc": "Inferior Alveolar",
        "Distribution": [
            "Mandibular teeth (excluding buccal gingiva of mandibular molars)",
            "Lower lip, chin and tongue"
        ],
        "Indications": "Dental pain (caries, dry socket, abscess). Fractures (mandibular, alveolar ridge, dental). Lingual lacerations.", 
        "Contraindications": [
            "Infection over site",
            "Allergy to local anesthetic"
        ],
        "Equipment":[
            "2-5cc of local anesthetic of choice",
            "5cc topical anesthetic (lidocaine-soaked gauze, swishing viscous lidocaine)",
            "Syringe",
            "Cleansing solution",
            "1.5 inch small gauge needle (25 or greater)"
        ],
        "Preparation": {
            "Landmarks": [],
            "Positioning": [
                "Patient should be sitting upright such that the mandible is parallel to the floor with the mouth open.",
                "Place yourself on the opposite side of the site being injected."
            ]
        },
        "Technique": {
            "non": [
                "Palpate the retromolar fossa with your non-injection thumb.",
                "Place the index finger of the same hand externally over the ramus of the mandible retracting the tissues toward the buccal aspect",
                "Visualize the pterygomandibular triangle",
                "Hold the syringe parallel to the occlusal surfaces of the teeth and angle so that the barrel lies between the 1st/2nd premolars of the opposite side. If a large syringe is being used, consider bending the needle 30 degrees for this approach",
                "Puncture with the needle 1cm above the occlusal surface of the molars",
                "Advance the needle until bone is felt",
                "Inject 1-2cc. Injecting as your withdraw has the added benefit of including the lingual (ant 2/3 of the tongue)"
            ]
        },
        "Complications": [
            "Inadvertent injection of the parotid gland (may cause iatrogenic Bell's Palsy). Occurs when bone is not felt during the initial approach. Redirect needle anteriorly until bone is felt",
            "Carotid sheath injection (Horner's from stellate ganglion blockade)",
            "Carotid artery puncture",
            "If the needle enters too low (at the level of the teeth), the anesthetic will be deposited over the bony canal that house the mandibular nerve and not over the nerve itself"
        ]
    },
    2004: {
        "position": "Ear Blocks",
        "struc": "Auricular",
        "Indications": "Repair of lacerations. Incision and drainage of hematoma or abscess. Other painful procedures involving the external ear", 
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Distortion of anatomical landmarks"
        ],
        "Equipment":[
            "2-5cc of local anesthetic of choice",
            "Syringe",
            "Cleansing solution",
            "1.5 inch small gauge needle (25 or greater)"
        ],
        "Preparation": {
            "Positioning": "Place patient in supine or sitting position"
        },
        "Technique": {
            "non": [
                "Provides anesthesia to entire ear",
                "Place patient in supine or sitting position",
                "Disinfect skin at the base and superior aspect of ear using chosen antiseptic",
                "Insert needle into the skin just inferior to the attachment of the earlobe to the head",
                "Advance needle just anterior to the tragus, aspirate while advancing",
                "Inject 2-3 mL of anesthetic while slowly withdrawing needle back to the original injection site",
                "Redirect and advance needle posterior and superior, aspirating while advancing",
                "Inject 2-3 mL anesthetic while withdrawing needle",
                "Remove needle and reinsert just superior to the attachment of the helix to the scalp",
                "Advance needle just anterior to the tragus, aspirate while advancing",
                "Inject 2-3 mL anesthetic while withdrawing needle toward to the original puncture site",
                "Redirect and advance needle posterior to the ear",
                "Inject 2-3 mL anesthetic while withdrawing needle"
            ]
        }
    },
    2005: {
        "position": "Neck Blocks",
        "struc": "Superficial Cervical Plexus",
        "Indications": "Clavicle fractures. Laceration repair. Internal jugular central lines", 
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Distortion of anatomical landmarks"
        ],
        "Equipment":[
            "2-5cc of local anesthetic of choice",
            "Syringe",
            "Saline Flush",
            "Cleansing solution",
            "Ultrasound with linear transducer",
            "Ultrasound transducer sterile cover"
        ],
        "Preparation": {
            "Positioning": "Place patient in supine position"
        },
        "Ultrasound": {
            "Landmarks": [
                "Place transducer in transverse orientation at the superior pole of the thyroid cartilage",
                "Identify labelled landmarks. 1.Internal jugular vein (IJ) 2.Carotid artery (CA) 3.Sternocleidomastoid muscle (SCM)",
                "Translate lateral to identify the fascial plane just inferior to the sternocleidomastoid muscle and above the levator scapulae muscle (LSM) which contains the superficial cervical plexus"
            ]
        },
        "Technique": {
            "non": [
                "In-plane needle visualization",
                "Lateral-to-medial approach with slow injection of anesthetic in the fascial plane between SCM and LSM"
            ]
        }
    },
    2006: {
        "position": "Occiput Blocks",
        "struc": "Occipital",
        "Indications": "Occipital neuralgia. Cluster headache. Cervicogenic headache. Migraine, particularly with occipital nerve irritation or tenderness.", 
        "Contraindications": [
            "Infection overlying injection site",
            "Allergy to local anesthetic",
            "Skull defect"
        ],
        "Equipment":[
            "2-10cc of local anesthetic of choice",
            "Syringe",
            "Cleansing solution",
            "23-25G needle"
        ],
        "Preparation": {
            "Positioning": "Position the patient upright"
        },
        "Technique": {
            "non": [
                "1. Identify the greater occipital nerve (GON) with any of the following techniques:",
                "Palpate the occipital artery pulse about 2cm lateral to the occipital protuberance. The greater occipital nerve is just medial to the occipital artery.",
                "Palpate the occipital protuberance and the mastoid process (on side of interest). Measure 1/3 the distance between the two points starting from the occipital protuberance. Stay just superior to the superior nuchal line to remain over the cranium.",
                "Identify the point of maximal tenderness in the general region as defined above that may elicit paresthesia in the occipital nerve distribution when palpated",
                "2. Clean the site of injection",
                "3. Insert the needle at a 90° angle toward the occiput until a bony endpoint is obtained",
                "4. Aspirate to avoid intravascular injection and to prevent injection into CSF",
                "5. Inject 1cc at the GON, 1cc medial to the nerve, and 1cc lateral to the nerve",
                "6. The procedure can be repeated on the contralateral side"
            ]
        }
    }
}
const Torso = {}
const Leg = {}
const Arm = {}
*/

(function loadBodyPart() {
    let s = "";
    for(let i in bodyPart){
        s += '<li><button id="bodyPartBTN" value="'+bodyPart[i]+'">'+bodyPart[i]+'</button></li>';
    }
    document.getElementById('nb-body-part-nav').innerHTML = '<ul>'+s+'</ul>';
})();


function loadModule(page_path){
    $('#nb-page-content').load(page_path);
}


function regBTN(querySelec, do_func){
    const blocksButtons = document.querySelectorAll(querySelec);
    blocksButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            blocksButtons.forEach((btn) => {
                btn.style.backgroundColor = '';
            });
            button.style.backgroundColor = 'rgb(214, 208, 199)';
            if (event.target && event.target.nodeName === 'BUTTON') {
                buttonValue = event.target.value;
                switch(do_func){
                    case 1:
                        document.getElementById('nb-page-content').innerHTML = '';
                        loadStruc(buttonValue);
                        break;
                    case 2:
                        //loadPage([pageArr[nowBody][buttonValue]]);
                        loadModule([pageArr[nowBody][buttonValue]]);
                        break;
                    default:
                        break;
                }
            }
        });
    });
}

function loadPage(page_path){
    fetch(page_path)
        .then(response => response.text())
        .then(html => {
            document.getElementById('nb-page-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

function loadStruc(v){
    let s = '';
    let targ = strucArr[nowBody][v];
    for(let i in targ){
        s += '<li><button id="StrucBlocksBTN" value="'+targ[i]+'">'+targ[i]+'</button></li>';
    }
    document.getElementById('nb-body-struc-nav').innerHTML = '<ul>'+s+'</ul>';
    regBTN('#StrucBlocksBTN', 2);
}

function loadBlock(v){
    let s = '';
    let targ = partBlocks[v];
    for(let i in targ){
        s += '<li><button id="PartBlocksBTN" value="'+targ[i]+'">'+targ[i]+'</button></li>';
    }
    document.getElementById('nb-body-blocks-nav').innerHTML = '<ul>'+s+'</ul>';
    regBTN('#PartBlocksBTN', 1);
}

const partButtons = document.querySelectorAll('#bodyPartBTN');
partButtons.forEach((button, index) => {
    //console.log(button);
    button.addEventListener('click', function(event) {
        //alert('Button ' + (index + 1) + ' clicked!');
        partButtons.forEach((btn) => {
            btn.style.backgroundColor = '';
        });
        document.getElementById('nb-body-struc-nav').innerHTML = '';
        document.getElementById('nb-page-content').innerHTML = '';
        button.style.backgroundColor = 'rgb(214, 208, 199)';
        if (event.target && event.target.nodeName === 'BUTTON') {
            let buttonValues = event.target.value;
            nowBody = buttonValues;
            //alert('Button clicked! Value: ' + buttonValue);
            loadBlock(buttonValues);
        }
    });
});