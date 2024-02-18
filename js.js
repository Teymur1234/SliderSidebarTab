const hamburger = document.getElementById("hamburgermenu1");
const hamburgerdiv = document.getElementById("hamburger1");
let isOpen = false;
function ham() {
    if (!isOpen) {
        const ul = document.createElement("ul");
        const items = ["Home", "Pages", "Blog", "Contact"];
        items.forEach(itemText => {
            const li = document.createElement("li");
            const a=document.createElement("a")
            a.textContent = itemText;
            li.appendChild(a)
            ul.appendChild(li);
        });
        ul.style.listStyleType="none"
        hamburgerdiv.appendChild(ul);
        ul.classList.add("menu-list");
        isOpen = true;
    } else {
        const ul = hamburgerdiv.querySelector("ul");
        ul.remove();
        isOpen = false;
    }
}
const nav=document.getElementById("nav")
function handleScroll() {
    let nextPx=window.pageYOffset
    if (nextPx<600 && nextPx>0) {
        nav.style.marginTop="-105px"
        hamburgerdiv.style.marginTop="-105px"
        
    }
    else if(nextPx==0){
        nav.style.backgroundColor="transparent"
        hamburgerdiv.style.marginTop="0px"
        nav.style.marginTop="0px"
    }
    else{
        nav.style.marginTop="0px"
        hamburgerdiv.style.marginTop="0px"
         nav.style.backgroundColor="black"
    }
}
window.addEventListener("scroll",handleScroll)
const slide=document.querySelectorAll(".slide")
const containerSlide=document.querySelector(".slide-container")
const slides=document.querySelector(".slides")
let currentIndex=0
let interval
function next() {
    if (currentIndex<slide.length-1) {
        currentIndex++
    }
    else{
        currentIndex=0
    }
    updateSlider()
}
function previous() {
    if (currentIndex>0) {
        currentIndex++
    }
    else{
        currentIndex=slide.length-1
    }
    updateSlider()
}
function updateSlider() {
    const transformvalue=-currentIndex*100 +"%"
    slides.style.transform=`translateX(${transformvalue})`
}
function startAutoPlay(params) {
    interval=setInterval(()=>{
        if (currentIndex<slide.length-1) {
            currentIndex++
        }
        else{
            currentIndex=0
        }
        updateSlider()
    },3000)
}
function stopAutoPlay() {
    clearInterval(interval)
}
startAutoPlay()
slides.addEventListener('click', function(event) {
    const rect = slides.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    if (offsetX > rect.width / 2) {
       next()
    } else {
        previous()
    }
});
containerSlide.addEventListener("mouseover",stopAutoPlay)
containerSlide.addEventListener("mouseleave",startAutoPlay)
const tabs=document.querySelectorAll(".menu-items")
function showTab(tabId) {
    tabs.forEach(tab=>{
        tab.style.display="none"
    })
    const selectedTab=document.getElementById(tabId)
    selectedTab.style.display="block"
}
document.getElementById("tab1show").addEventListener("click",()=>{
    showTab(`tab1`)
})
document.getElementById("tab2show").addEventListener("click",()=>{
    showTab(`tab2`)
})
document.getElementById("tab3show").addEventListener("click",()=>{
    showTab(`tab3`)
})