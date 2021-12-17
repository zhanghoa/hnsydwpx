// ==UserScript==
// @name         湖南开放大学事业单位培训网
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.hnsydwpx.cn/*
// @icon         https://www.google.com/s2/favicons?domain=hnsydwpx.cn
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let kc_lb = /pageclasscourse/;
  let sp_lb = /ckPlayer/;
  let kc1_lb = /kcxx?/;
  let videoSite = window.location.href;
  let llcs = 0
  let llcs1=0
  let a=2
     setTimeout(()=> {
           if (sp_lb.test(videoSite)) {
             console.log('视频列表网页');
             $('.zhangItem').each(function (index, element) {
               llcs = $(element).find('.smallTitle+span').text()
               console.log(llcs)
               if (llcs !== '100%') {
                 jc_jd()}
           function jc_jd() {
                 let ds_jc_jd = setInterval(() => {
                   if (llcs === '100%') {
                     clearInterval(ds_jc_jd)}
                   else if (llcs === llcs1) {
                     window.location.href = "http://sydwperson.hnsydwpx.cn//pageclasscourse/getClassCourse?MENU=bjyd&secondMENU=bjkc";
                   }
                   llcs1 = llcs
                   llcs = $(element).find('.smallTitle+span').text()
                   console.log(llcs)
                 }, 60000)
               }
             });
           if (llcs==='100%'){
             llcs=0
             window.location.href="http://sydwperson.hnsydwpx.cn//pageclasscourse/getClassCourse?MENU=bjyd&secondMENU=bjkc";
             }
            }
           // Your code here..
           if (kc_lb.test(videoSite)) {
             console.log('课程列表网页');
               jc_kc()
               let i=$(".current_page").text()
               i=parseInt(i)
               i=1+i
               javascript:fy(i)
             function jc_kc() {
               $('.fontlist tbody tr').each(function (index, element1) {
                 if ($(element1).find("[class='ck_btn ck_btn1'],[class='ck_btn ck_btn3']").text() === "学习中") {
                   $(element1).find("[class=ck_btn]")[0].click();
                 } else if ($(element1).find("[class='ck_btn ck_btn3']").text() === "未学习") {
                   $(element1).find("[class=ck_btn]")[0].click();
                 }
               })
             }
           }
           if (kc1_lb.test(videoSite)){
              console.log('课程列表1网页');
              $(".chapterlist").each(function (index,element2){
                console.log($(element2).find(".hideSpan")[0].click())
              })
           }
     }, 1000);

 })();
