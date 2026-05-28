// ============================================================
//  TRADUCTIONS — FR / EN
// ============================================================
const translations = {
    fr: {
        nav_home:'Accueil',nav_portfolio:'Portfolio',nav_radio:'Radioamateur',nav_about:'À propos',nav_contact:'Contact',
        hero_badge:'Étudiant BTS CIEL · Cybersécurité & Électronique',
        hero_desc:'Passionné par les systèmes radio, la sécurité informatique et les nouvelles technologies.<br>Indicatif radioamateur <strong style="color:var(--or);">F4LMS</strong>.',
        hero_btn_proj:'Voir mes projets',hero_btn_cont:'Me contacter',
        about_title:'À propos de moi',
        about_p1:'Étudiant en <strong>BTS Cybersécurité, Informatique et Électronique</strong>, je cultive une curiosité naturelle pour les systèmes qui nous entourent. De l\'analyse des fréquences radio à la sécurisation des données, j\'aime comprendre "comment ça marche" pour ensuite l\'optimiser.',
        about_p2:'Mon approche combine la rigueur technique acquise via mes certifications (HAREC) et la créativité développée à travers la pratique musicale.',
        about_cv:'Télécharger mon CV (PDF)',
        contact_title:'Contactez-moi',contact_sub:'Restons en contact',
        contact_desc:'Que ce soit pour une opportunité professionnelle, un projet collaboratif, ou simplement pour échanger sur la radio et l\'informatique, n\'hésitez pas !',
        lbl_linkedin:'LinkedIn',lbl_radio:'Radioamateur',lbl_cv:'Curriculum Vitae',cv_dl:'Télécharger mon CV',
        form_prenom:'Prénom',form_nom:'Nom',form_email:'Adresse e-mail',form_sujet:'Sujet',form_msg:'Message',
        form_submit:'Envoyer le message',form_note:'Votre message sera envoyé directement sur mon serveur Nginx.',
        msg_success:'✅ Merci ! Votre message a bien été envoyé.',
        msg_err_email:'❌ L\'adresse e-mail fournie n\'est pas valide.',
        msg_err_server:'❌ Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ultérieurement.',
        radio_badge:'Indicatif F4LMS',radio_title:'Radioamateur',
        radio_p1:'Titulaire de la licence HAREC, je suis passionné par les communications radio sous toutes leurs formes : HF, VHF/UHF, modes numériques, et expérimentation d\'antennes.',
        radio_p2:'La radio amateur me permet de combiner ma passion pour l\'électronique, l\'informatique et la communication à l\'échelle mondiale — parfois sans aucune infrastructure intermédiaire.',
        radio_mat_title:'Mon Matériel',radio_log_title:'Mon Journal de Trafic',
        radio_log_sub:'Retrouvez tous mes QSO enregistrés via ClubLog (indicatif F4LMS).',
        propos_title:'À propos de moi',
        propos_p1:'Étudiant en <strong>BTS Cybersécurité, Informatique et Électronique</strong>, je cultive une curiosité naturelle pour les systèmes qui nous entourent. De l\'analyse des fréquences radio à la sécurisation des données, j\'aime comprendre "comment ça marche" pour ensuite l\'optimiser.',
        propos_p2:'Mon approche combine la rigueur technique acquise via mes certifications (HAREC) et la créativité développée à travers la pratique musicale.',
        beyond_title:'Au-delà de la technique',
        beyond_sub:'Mes centres d\'intérêt reflètent mon goût pour la précision, la communication et l\'exploration.',
        card_radio_lbl:'Radioamateur (F4LMS)',card_radio_sub:'Opérateur certifié HAREC — Expertise en ondes et électronique.',
        card_choir_lbl:'Chant Choral',card_choir_sub:'Esprit d\'équipe, écoute et harmonie au sein d\'un ensemble.',
        card_trump_lbl:'Trompette',card_trump_sub:'Pratique instrumentale exigeante : rigueur et persévérance.',
        card_plane_lbl:'Aviation & Spotting',card_plane_sub:'Passion pour l\'aéronautique et la technique (Skymaphub).',
        footer_copy:'© 2026 Quentin Stutzmann. Tous droits réservés.',
        port_edu_title: 'Mon Parcours Scolaire',
        port_bac_title: 'Baccalauréat STI2D',
        port_bac_desc: 'Obtention de la licence HAREC radioamateur',
        port_bts_title: 'BTS Cybersécurité Informatique Électronique',
        port_bts_desc: 'Projet de fin d\'études : participation au concours COVACIEL',
        port_status_admitted: 'Admis',
        port_status_ongoing: 'En cours',
        port_exp_title: 'Expérience Professionnelle',
        port_exp_intern: 'Stage',
        port_exp_cdd: 'CDD',
        port_exp_role_obs: 'Stage d’observation',
        port_exp_desc_obs: 'Découverte des différents services aéroportuaires',
        port_exp_role_tech: 'Technicien Centre Service N2',
        port_exp_desc_tech: 'Support utilisateur, déploiement de postes et gestion du stock',
        port_real_title: 'Mes Réalisations',
        port_proj_sky_desc: 'Création d\'un site web pour la recherche de cartes pour simulateur de vol ou réel.',
        port_proj_btn: 'Voir le projet',
        lang_toggle:'EN',
    },
    en: {
        nav_home:'Home',nav_portfolio:'Portfolio',nav_radio:'Ham Radio',nav_about:'About',nav_contact:'Contact',
        hero_badge:'BTS CIEL Student · Cybersecurity & Electronics',
        hero_desc:'Passionate about radio systems, information security and new technologies.<br>Ham radio callsign <strong style="color:var(--or);">F4LMS</strong>.',
        hero_btn_proj:'View my projects',hero_btn_cont:'Contact me',
        about_title:'About me',
        about_p1:'Student in <strong>Cybersecurity, IT & Electronics</strong>, I have a natural curiosity for the systems around us. From analysing radio frequencies to securing data, I love understanding "how it works" and then optimising it.',
        about_p2:'My approach combines technical rigour gained through certifications (HAREC) and creativity developed through musical practice.',
        about_cv:'Download my CV (PDF)',
        contact_title:'Contact me',contact_sub:'Let\'s stay in touch',
        contact_desc:'Whether it\'s for a professional opportunity, a collaborative project, or simply to chat about radio and IT — don\'t hesitate!',
        lbl_linkedin:'LinkedIn',lbl_radio:'Ham Radio',lbl_cv:'Curriculum Vitae',cv_dl:'Download my CV',
        form_prenom:'First name',form_nom:'Last name',form_email:'Email address',form_sujet:'Subject',form_msg:'Message',
        form_submit:'Send message',form_note:'Your message will be sent directly to my Nginx server.',
        msg_success:'✅ Thank you! Your message has been sent successfully.',
        msg_err_email:'❌ The email address provided is not valid.',
        msg_err_server:'❌ An error occurred while sending your message. Please try again later.',
        radio_badge:'Callsign F4LMS',radio_title:'Ham Radio',
        radio_p1:'Holding a HAREC licence, I am passionate about radio communications in all their forms: HF, VHF/UHF, digital modes, and antenna experimentation.',
        radio_p2:'Amateur radio allows me to combine my passion for electronics, computing and communication on a worldwide scale — sometimes without any intermediate infrastructure.',
        radio_mat_title:'My Equipment',radio_log_title:'My Logbook',
        radio_log_sub:'Find all my QSOs logged via ClubLog (callsign F4LMS).',
        propos_title:'About me',
        propos_p1:'Student in <strong>Cybersecurity, IT & Electronics</strong>, I have a natural curiosity for the systems around us. From analysing radio frequencies to securing data, I love understanding "how it works" and then optimising it.',
        propos_p2:'My approach combines technical rigour gained through certifications (HAREC) and creativity developed through musical practice.',
        beyond_title:'Beyond the technical',
        beyond_sub:'My interests reflect my taste for precision, communication and exploration.',
        card_radio_lbl:'Ham Radio (F4LMS)',card_radio_sub:'HAREC certified operator — Expertise in radio waves and electronics.',
        card_choir_lbl:'Choral Singing',card_choir_sub:'Teamwork, listening and harmony within an ensemble.',
        card_trump_lbl:'Trumpet',card_trump_sub:'Demanding instrumental practice: rigour and perseverance.',
        card_plane_lbl:'Aviation & Spotting',card_plane_sub:'Passion for aeronautics and technology (Skymaphub).',
        footer_copy:'© 2026 Quentin Stutzmann. All rights reserved.',
        port_edu_title: 'Educational Background',
        port_bac_title: 'STI2D Baccalaureate',
        port_bac_desc: 'Obtained HAREC amateur radio license',
        port_bts_title: 'Associate Degree in Cybersecurity, IT & Electronics',
        port_bts_desc: 'Final year project: participation in the COVACIEL contest',
        port_status_admitted: 'Graduated',
        port_status_ongoing: 'In Progress',
        port_exp_title: 'Work Experience',
        port_exp_intern: 'Internship',
        port_exp_cdd: 'Fixed-term Contract',
        port_exp_role_obs: 'Observation Internship',
        port_exp_desc_obs: 'Discovery of various airport services',
        port_exp_role_tech: 'IT Support Technician L2',
        port_exp_desc_tech: 'User support, workstation deployment and stock management',
        port_real_title: 'My Projects',
        port_proj_sky_desc: 'Web application for flight simulation or real aviation charts search.',
        port_proj_btn: 'View Project',
        lang_toggle:'FR',
    }
};

function setCookie(name,value,days){const d=new Date();d.setTime(d.getTime()+days*24*60*60*1000);document.cookie=`${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;}
function getCookie(name){const m=document.cookie.match(new RegExp('(^| )'+name+'=([^;]+)'));return m?m[2]:null;}

function applyLang(lang){
    const t=translations[lang];if(!t)return;
    // Nav
    document.querySelectorAll('nav a[data-key]').forEach(a=>{const k=a.getAttribute('data-key');if(t[k])a.textContent=t[k];});
    // Footer
    const fp=document.querySelector('footer p');if(fp)fp.innerHTML=t.footer_copy;
    // Lang btn
    const lb=document.getElementById('lang-btn');if(lb)lb.textContent=t.lang_toggle;
    // Hero
    const hb=document.querySelector('.hero-badge');if(hb)hb.innerHTML=t.hero_badge;
    const hd=document.querySelector('.hero-desc');if(hd)hd.innerHTML=t.hero_desc;
    const ha=document.querySelectorAll('.hero-actions a');if(ha[0])ha[0].textContent=t.hero_btn_proj;if(ha[1])ha[1].textContent=t.hero_btn_cont;
    // About (index)
    const ab=document.querySelector('section#propos');
    if(ab){
        const h2=ab.querySelector('h2');if(h2)h2.textContent=t.about_title;
        const pp=ab.querySelectorAll('p');if(pp[0])pp[0].innerHTML=t.about_p1;if(pp[1])pp[1].innerHTML=t.about_p2;
        const cv=ab.querySelector('a.btn');if(cv)cv.textContent=t.about_cv;
    }
    // Contact page
    const ct=document.querySelector('.titre-page h1');if(ct)ct.innerHTML=t.contact_title;
    const cs=document.querySelector('.contact-info h3');if(cs)cs.textContent=t.contact_sub;
    const cd=document.querySelector('.contact-info > p');if(cd)cd.textContent=t.contact_desc;
    const li=document.querySelectorAll('.contact-link-item');
    if(li[0]){const l=li[0].querySelector('.clink-label');if(l)l.textContent=t.lbl_linkedin;}
    if(li[1]){const l=li[1].querySelector('.clink-label');if(l)l.textContent=t.lbl_radio;}
    if(li[2]){const l=li[2].querySelector('.clink-label');if(l)l.textContent=t.lbl_cv;const v=li[2].querySelector('.clink-value');if(v)v.textContent=t.cv_dl;}
    const fs=document.querySelectorAll('.contact-form label span');
    const sk=['form_prenom','form_nom','form_email','form_sujet','form_msg'];
    fs.forEach((s,i)=>{if(sk[i])s.textContent=t[sk[i]];});
    const st=document.querySelector('.fancy .text');if(st)st.textContent=t.form_submit;
    const fn=document.querySelector('.form-note');if(fn)fn.textContent=t.form_note;
    // Ham radio
    const ib=document.querySelector('.indicatif-badge');if(ib)ib.textContent=t.radio_badge;
    const rh=document.querySelector('.radio-hero h2');if(rh)rh.textContent=t.radio_title;
    const rp=document.querySelectorAll('.radio-hero-inner > div > p');if(rp[0])rp[0].innerHTML=t.radio_p1;if(rp[1])rp[1].innerHTML=t.radio_p2;
    const ms=document.querySelector('.materiel-section h2');if(ms)ms.textContent=t.radio_mat_title;
    const cls=document.querySelector('.clublog-section h2');if(cls)cls.textContent=t.radio_log_title;
    const clsub=document.querySelector('.clublog-section .subtitle');if(clsub)clsub.textContent=t.radio_log_sub;
    // Propos
    const ph2=document.querySelector('section#propos h2');if(ph2)ph2.textContent=t.propos_title;
    const pp2=document.querySelectorAll('section#propos p');if(pp2[0])pp2[0].innerHTML=t.propos_p1;if(pp2[1])pp2[1].innerHTML=t.propos_p2;
    const bh=document.querySelector('#competences h2');if(bh)bh.textContent=t.beyond_title;
    // Beyond sub — find p inside #competences with style attribute (the subtitle)
    const bsub=document.querySelector('#competences p[style]');if(bsub)bsub.textContent=t.beyond_sub;
    // Photo cards
    const cards=document.querySelectorAll('.photo-carte');
    const ck=[['card_radio_lbl','card_radio_sub'],['card_choir_lbl','card_choir_sub'],['card_trump_lbl','card_trump_sub'],['card_plane_lbl','card_plane_sub']];
    cards.forEach((card,i)=>{
        if(!ck[i])return;
        const label=card.querySelector('.photo-label');
        if(label){
            const sp=label.querySelector('span');
            const tn=[...label.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.trim());
            if(tn)tn.textContent=t[ck[i][0]];
            if(sp)sp.textContent=t[ck[i][1]];
        }
    });
    document.documentElement.lang=lang;
    setCookie('lang',lang,365);
    window.__currentLang=lang;
}

function setupHamburger(){
    const header=document.querySelector('header');if(!header||document.getElementById('burger-btn'))return;
    const btn=document.createElement('button');
    btn.id='burger-btn';btn.setAttribute('aria-label','Menu');btn.setAttribute('aria-expanded','false');
    btn.innerHTML='<span></span><span></span><span></span>';
    header.appendChild(btn);
    btn.addEventListener('click',()=>{
        const nav=header.querySelector('nav');
        const open=nav.classList.toggle('nav-open');
        btn.classList.toggle('open',open);
        btn.setAttribute('aria-expanded',String(open));
    });
    document.addEventListener('click',e=>{if(!header.contains(e.target)){header.querySelector('nav').classList.remove('nav-open');btn.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
    header.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.querySelector('nav').classList.remove('nav-open');btn.classList.remove('open');btn.setAttribute('aria-expanded','false');}));
}

function setupLangButton(){
    if(document.getElementById('lang-btn'))return;
    const btn=document.createElement('button');
    btn.id='lang-btn';btn.setAttribute('aria-label','Switch language');
    btn.textContent=window.__currentLang==='fr'?'EN':'FR';
    const header=document.querySelector('header');
    if(header)header.appendChild(btn);
    btn.addEventListener('click',()=>applyLang(window.__currentLang==='fr'?'en':'fr'));
}

function setupScrollAnimations(){
    const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.15,rootMargin:'0px 0px -50px 0px'});
    document.querySelectorAll('.timeline-item,.exp-item,.photo-carte,.projet-carte').forEach(t=>{if(!t.classList.contains('visible'))obs.observe(t);});
}

function setupContactForm(){
    const p=new URLSearchParams(window.location.search);const status=p.get('status');const box=document.getElementById('form-message');
    const t=translations[window.__currentLang||'fr'];
    if(status&&box){
        box.style.display='block';
        if(status==='success'){box.style.backgroundColor='#d4edda';box.style.color='#155724';box.style.border='1px solid #c3e6cb';box.textContent=t.msg_success;const f=document.getElementById('contactForm');if(f)f.reset();}
        else if(status==='error_email'){box.style.backgroundColor='#f8d7da';box.style.color='#721c24';box.style.border='1px solid #f5c6cb';box.textContent=t.msg_err_email;}
        else{box.style.backgroundColor='#f8d7da';box.style.color='#721c24';box.style.border='1px solid #f5c6cb';box.textContent=t.msg_err_server;}
        window.history.replaceState(null,null,window.location.pathname);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const cookieLang=getCookie('lang');
    const browserLang=navigator.language?.startsWith('en')?'en':'fr';
    const lang=cookieLang||browserLang;
    window.__currentLang=lang;
    setupHamburger();
    setupLangButton();
    applyLang(lang);
    setupScrollAnimations();
    setupContactForm();
});