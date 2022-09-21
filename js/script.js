// =============== Count Down ==================

var dest = new Date ("sep 22, 2022 12:00:00").getTime();
var x = setInterval(function(){

var now = new Date ().getTime();

var diff = dest-now;
//console.log(diff);

var days = Math.floor(diff/(1000*60*60*24));
//console.log(days);

var hour = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
//console.log(hour);

var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
//console.log(minutes);

var Seconds = Math.floor((diff%(1000*60))/1000);
//console.log(Seconds);

document.getElementById("time1").innerHTML=days+" d";
document.getElementById("time2").innerHTML=hour+" h";
document.getElementById("time3").innerHTML=minutes+" m";
document.getElementById("time4").innerHTML=Seconds+" s";

},1000);


// toggle button

const mobile_nav = document.querySelector(".toggle-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", ()=>toggleNavbar());




// ===================read more/less features start ===================

 const feature_btn1 = document.querySelector(".feature-btn-1");

 const plan_1 = document.querySelector(".plan-1");

 feature_btn1.addEventListener("click",(e)=>{

    plan_1.classList.toggle("show-more");

    if(feature_btn1.innerText === 'See Less features'){
        feature_btn1.innerText = 'See All features';
    }else{
        feature_btn1.innerText = 'See Less features ';
    }
 })



 const feature_btn2 = document.querySelector(".feature-btn-2");

 const plan_2 = document.querySelector(".plan-2");

 feature_btn2.addEventListener("click",(e)=>{

    plan_2.classList.toggle("show-more");
    if(feature_btn2.innerText === 'See Less features'){
        feature_btn2.innerText = 'See All features';
    }else{
        feature_btn2.innerText = 'See Less features';
    }
 })



 const feature_btn3 = document.querySelector(".feature-btn-3");

 const plan_3 = document.querySelector(".plan-3");

 feature_btn3.addEventListener("click",(e)=>{

    plan_3.classList.toggle("show-more");
    if(feature_btn3.innerText === 'See Less features'){
        feature_btn3.innerText = 'See All features';
    }else{
        feature_btn3.innerText = 'See Less features';
    }
 })

 // ================= Read more/less button ends ===========

 // ================= Service section start ===============

const service_text = document.querySelector(".service-text"); 
const service_btn = document.querySelectorAll(".service-btn");
const service_img_elem = document.querySelectorAll(".img-overlay");

service_text.addEventListener("click", (e) => {
    const service_btn_clicked = e.target;
    console.log(service_btn_clicked);
    
    service_btn.forEach((curElem) => curElem.classList.remove("p-data-active"));
    service_btn_clicked.classList.add("p-data-active");

    // //==============to find the number in data attr

    const data_btn = service_btn_clicked.dataset.btnNum;
    console.log(data_btn);

    const img_active = document.querySelectorAll(`.data-btn--${data_btn}`);
    console.log(img_active);
    service_img_elem.forEach((curElem) => curElem.classList.add("service-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("service-not-active"));
});



// FAQ Section

const faq_btn = document.querySelector(".faq-btn");
const faq_para = document.querySelector(".faq-para");
faq_btn.addEventListener("click",(e)=>{
faq_para.classList.toggle("view-less");
})

const faq_btn_2 = document.querySelector(".faq-btn-2");
const faq_para_2 = document.querySelector(".faq-para-2");
faq_btn_2.addEventListener("click",(e)=>{
faq_para_2.classList.toggle("view-less");
})

const faq_btn_3 = document.querySelector(".faq-btn-3");
const faq_para_3 = document.querySelector(".faq-para-3");
faq_btn_3.addEventListener("click",(e)=>{
faq_para_3.classList.toggle("view-less");
})

const faq_btn_4 = document.querySelector(".faq-btn-4");
const faq_para_4 = document.querySelector(".faq-para-4");
faq_btn_4.addEventListener("click",(e)=>{
faq_para_4.classList.toggle("view-less");
})

const faq_btn_5 = document.querySelector(".faq-btn-5");
const faq_para_5 = document.querySelector(".faq-para-5");
faq_btn_5.addEventListener("click",(e)=>{
faq_para_5.classList.toggle("view-less");
})

const faq_btn_6 = document.querySelector(".faq-btn-6");
const faq_para_6 = document.querySelector(".faq-para-6");
faq_btn_6.addEventListener("click",(e)=>{
faq_para_6.classList.toggle("view-less");
})

const faq_btn_7 = document.querySelector(".faq-btn-7");
const faq_para_7 = document.querySelector(".faq-para-7");
faq_btn_7.addEventListener("click",(e)=>{
faq_para_7.classList.toggle("view-less");
})

const faq_btn_8 = document.querySelector(".faq-btn-8");
const faq_para_8 = document.querySelector(".faq-para-8");
faq_btn_8.addEventListener("click",(e)=>{
faq_para_8.classList.toggle("view-less");
})

const faq_btn_9 = document.querySelector(".faq-btn-9");
const faq_para_9 = document.querySelector(".faq-para-9");
faq_btn_9.addEventListener("click",(e)=>{
faq_para_9.classList.toggle("view-less");
})

const faq_btn_10 = document.querySelector(".faq-btn-10");
const faq_para_10 = document.querySelector(".faq-para-10");
faq_btn_10.addEventListener("click",(e)=>{
faq_para_10.classList.toggle("view-less");
})

const faq_btn_11 = document.querySelector(".faq-btn-11");
const faq_para_11 = document.querySelector(".faq-para-11");
faq_btn_11.addEventListener("click",(e)=>{
faq_para_11.classList.toggle("view-less");
})

const faq_btn_12 = document.querySelector(".faq-btn-12");
const faq_para_12 = document.querySelector(".faq-para-12");
faq_btn_12.addEventListener("click",(e)=>{
faq_para_12.classList.toggle("view-less");
})

const faq_btn_13 = document.querySelector(".faq-btn-13");
const faq_para_13 = document.querySelector(".faq-para-13");
faq_btn_13.addEventListener("click",(e)=>{
faq_para_13.classList.toggle("view-less");
})

const faq_btn_14 = document.querySelector(".faq-btn-14");
const faq_para_14 = document.querySelector(".faq-para-14");
faq_btn_14.addEventListener("click",(e)=>{
faq_para_14.classList.toggle("view-less");
})