// Back to Top
const backTop = document.querySelector(".back-top");

if(backTop){
  backTop.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

// Number Counter
const counters = document.querySelectorAll(".counter");

function runCounters(){
  counters.forEach(counter=>{
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 80;

    function update(){
      count += speed;
      if(count < target){
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      }else{
        counter.innerText = target.toLocaleString();
      }
    }
    update();
  });
}

let counterStarted = false;

window.addEventListener("scroll",()=>{
  const impact = document.querySelector(".impact-section");
  if(!impact || counterStarted) return;

  if(impact.getBoundingClientRect().top < window.innerHeight - 100){
    runCounters();
    counterStarted = true;
  }
});

// Language Switch
const langBtn = document.getElementById("lang-btn");

let currentLang = localStorage.getItem("naccf_lang") || "en";

const translations = {
  en: {
    missionTitle: "Our Mission",
    missionSub: "Culture · Education · Compassion · Community",
    programsTitle: "Featured Programs",
    programsSub: "Six Major Programs",
    impactTitle: "Our Impact",
    newsTitle: "Latest News",
    newsSub: "Foundation Updates"
  },
  zh: {
    missionTitle: "我们的使命",
    missionSub: "文化 · 教育 · 关爱 · 社区",
    programsTitle: "公益项目",
    programsSub: "六大公益项目",
    impactTitle: "公益影响力",
    newsTitle: "最新动态",
    newsSub: "基金会最新动态"
  }
};

function applyLanguage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang] && translations[lang][key]){
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("naccf_lang", lang);
}

if(langBtn){
  langBtn.addEventListener("click",()=>{
    currentLang = currentLang === "en" ? "zh" : "en";
    applyLanguage(currentLang);
  });

  applyLanguage(currentLang);
}
