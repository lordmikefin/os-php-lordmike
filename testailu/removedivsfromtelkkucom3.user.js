// ==UserScript==
// @name           RemoveDivsFromTelkkuCom3
// @namespace      TelkkuCom
// @description    Remove unwanted div tags from Telkku.com site. Ver. 3
// @include        http://www.telkku.com/*
// @author         Lord Mike (lordmike@iki.fi) aka. Mikko Niemelä (mikko.niemela@iki.fi)
// ==/UserScript==

var elem = [];
var el = [];
var classes = [];
var i = [];
var j = [];
var k = [];
var newel = [];
var strClass = [];
var strArray = [];
var elemH = [];
var elH = [];
var classesH = [];

// Add note to window title
document.title = document.title + " - GM modified";

/*
// Print Class name to all "div" tag which have class parameter
elem = document.getElementsByTagName("div");
for (i = 0; i < elem.length; i++) {
	if (elem[i] && elem[i].className) {
		classes = elem[i].className;
		newel = document.createTextNode('CLASS: ' + classes);
		el = elem[i];
		el.appendChild(newel);
	}
}
*/
/*
// Print id name to all "div" tag which have id parameter
elem = document.getElementsByTagName("div");
for (i = 0; i < elem.length; i++) {
	if (elem[i] && elem[i].id) {
		classes = elem[i].id;
		newel = document.createTextNode('ID: ' + classes);
		el = elem[i];
		el.appendChild(newel);
	}
}
*/
/*
// Print id name to all "footer" tag which have id parameter
elem = document.getElementsByTagName("footer");
for (i = 0; i < elem.length; i++) {
	if (elem[i] && elem[i].id) {
		classes = elem[i].id;
		newel = document.createTextNode('ID: ' + classes);
		el = elem[i];
		el.appendChild(newel);
	}
}
*/
/*
// Print Class name to all "footer" tag which have class parameter
elem = document.getElementsByTagName("footer");
for (i = 0; i < elem.length; i++) {
	if (elem[i] && elem[i].className) {
		classes = elem[i].className;
		newel = document.createTextNode('CLASS: ' + classes);
		el = elem[i];
		el.appendChild(newel);
	}
}
*/



// Remove "footer" tags from site
// Remove <footer  id="articles">
//el = document.getElementById("articles");
//if (el) el.parentNode.removeChild(el);
// Remove <footer id="almaFooter">
el = document.getElementById("almaFooter");
if (el) el.parentNode.removeChild(el);
// Remove <footer id="footer">
el = document.getElementById("footer");
if (el) el.parentNode.removeChild(el);




// Remove "div" tags from site
// Remove <div id="fb-root"">
//el = document.getElementById("fb-root");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="topBannerWrapper">
//el = document.getElementById("topBannerWrapper");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="tickerBannerWrapper">
//el = document.getElementById("tickerBannerWrapper");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="textAdSlotLeftWrapper">
//el = document.getElementById("textAdSlotLeftWrapper");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="textAdSlotRightWrapper">
//el = document.getElementById("textAdSlotRightWrapper");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="silverScreenSlotWrapper">
//el = document.getElementById("silverScreenSlotWrapper");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="bottomAdSlot">
//el = document.getElementById("bottomAdSlot");
//if (el) el.parentNode.removeChild(el);

// Remove <div id="EAS_2376">
//el = document.getElementById("EAS_2376");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="EAS_2315">
//el = document.getElementById("EAS_2315");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="EAS_3458">
//el = document.getElementById("EAS_3458");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="EAS_3607">
//el = document.getElementById("EAS_3607");
//if (el) el.parentNode.removeChild(el);
// Remove <div id="footerContentWrapper">
el = document.getElementById("footerContentWrapper");
if (el) el.parentNode.removeChild(el);
// Remove <div id="mobile-footer">
el = document.getElementById("mobile-footer");
if (el) el.parentNode.removeChild(el);
// Remove <div id="topBannerWrapper">
el = document.getElementById("topBannerWrapper");
if (el) el.parentNode.removeChild(el);
// Remove <div id="commentContainer">
el = document.getElementById("commentContainer");
if (el) el.parentNode.removeChild(el);
// Remove <div id="removePartialFogscreen">
el = document.getElementById("removePartialFogscreen");
if (el) el.parentNode.removeChild(el);



// mod stype of <div id="site-navigation">
el = document.getElementById("site-navigation");
if (el) {
	el.style.marginBottom = "0px";
	//strClass = el.className;
	//strArray = strClass.split(" ");
	//alert("class name: " + strClass +"\n " + strArray[1]);
	//if (strArray[1] == "site-navigation") {
		//alert("class name: " + strArray[1]);
	//}
		//if (el.className) {
			//classes = el.className;
			//var strAArray = classes.split(" ");
			//if (strAArray[1] == "site-navigation") {
				//alert("class : " + strAArray[1]);
			//}
		//}
}
//strArray = [];



// Remove "Div" tags with class name parameter XXXX
elem = document.getElementsByTagName("div");
for (i = 0; i < elem.length; i++) {
	if (elem[i]) {
		el = elem[i];
		//if (el.id) {
		//	tagId = el.id;
		//	if (tagId == 'site-navigation') {
		//		el.parentNode.removeChild(el);
		//	}
		//}
		if (el.className) {
			classes = el.className;
			//var strArray = classes.split(" ");
			//if (strArray[1] == "site-navigation") {
			//	alert("class : " + strArray[1]);
			//}
			//if (classes == "l-wide site-navigation") {
				//el.style.marginBottom = "0px";
			//	var strClass = el.className; el.classList
			//	alert("class name: " + classes);
			//}
			//if (classes == 'site-navigation__user-menu dropdown js-dropdown is-active already-initialized') {
			//	el.style.marginBottom = "0px"
			//}


			if (classes == 'header-dominance-wrapper') {
				el.parentNode.removeChild(el);
			}

			//if (classes == 'l-grid--11') {
			//	el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-grid--4 site-navigation__user-menu') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-wide site-navigation') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-island--only-horizontal') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-wide sticky-placeholder') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'clearfix') {
			//	el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-wrap l-grid--16 centerAreaAds') {
			//	el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-grid--16 l-wrap') {
			//	el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-wide theme-toolbar rhythm-remove-trailer') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-wrap l-grid--16') {
				//el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-grid--16 l-wrap rhythm-trailer') {
			//	el.parentNode.removeChild(el);
			//}
			//if (classes == 'l-grid--16 l-wrap rhythm-trailer rhythm-leader') {
			//	el.parentNode.removeChild(el);
			//}
		}
	}
}


elem = document.getElementsByTagName("header");
for (i = 0; i < elem.length; i++) {
	if (elem[i]) {
		el = elem[i];
		if (el.className) {
			classes = el.className;
			strArray = classes.split(" ");
			for (j = 0; j < strArray.length; j++) {
				if (strArray[j] == "theme-toolbar") {
					//alert("class : " + strArray[1]);
					el.style.marginBottom = "0px";
					el.style.padding = "3px 0px";
					//alert("class : " + elem.length);

					//elemH = el.getElementsByTagName("h1");
					//alert("class : " + elemH.length);
					//for (k = 0; k < elemH.length; k++) {
					//	if (elemH[k]) {
					//		elH = elemH[i];
					//		if (elH.className) {
					//			classesH = elH.className;
								//alert("class : " + classesH);
					//		}
					//	}
					//}
				}
			}

			//if (classes == "l-wide site-navigation") {
				//el.style.marginBottom = "0px";
			//	var strClass = el.className; el.classList
			//	alert("class name: " + classes);
			//}
		}
	}
}



