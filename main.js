(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ashish\PROFESSIONAL WORK\Angular Projects\Profile\Ashish-Portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F+QG":
/*!******************************************************************************!*\
  !*** ./src/app/project-section/recent-projects/recent-projects.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecentProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentProjectsComponent", function() { return RecentProjectsComponent; });
/* harmony import */ var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json-files/projects.json */ "S08x");
var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json-files/projects.json */ "S08x", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RecentProjectsComponent {
    constructor() {
        this.projects = _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
    }
}
RecentProjectsComponent.ɵfac = function RecentProjectsComponent_Factory(t) { return new (t || RecentProjectsComponent)(); };
RecentProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecentProjectsComponent, selectors: [["app-recent-projects"]], decls: 40, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-md-12"], [1, "pf-white"], ["href", "#", "routerLink", "/projects", 1, "read-more", "pf-yellow"], [1, "right-arrow"], [1, "row", "mt-3"], [1, "col-xs-12", "col-sm-6", "col-md-4", "mt-3"], [1, "project-card"], ["width", "100%", "height", "100%", "alt", "project", 3, "src"], [1, "project-details"], ["href", "#", 1, "read-more", "pf-yellow", 3, "routerLink"], [1, "col-xs-12", "col-sm-12", "col-md-4", "mt-3"]], template: function RecentProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Recent Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SEE ALL PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "READ MORE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "READ MORE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "READ MORE >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projects[0].projectImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[0].shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/project-details/", ctx.projects[0].id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projects[1].projectImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[1].shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/project-details/", ctx.projects[1].id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.projects[2].projectImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.projects[2].shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/project-details/", ctx.projects[2].id, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".project-cards-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: var(--yellow);\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n}\r\n\r\n.project-details[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    padding: 20px;\r\n    transform: translateY(100%);\r\n    background: linear-gradient(159deg, rgba(45, 45, 58, 0.98) 0%, rgba(43, 43, 53, 0.98) 100%);\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    transition: 0.55s ease-in-out;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]:hover   .project-details[_ngcontent-%COMP%] {\r\n    transform: translateY(0);\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: 0.55s ease-in-out;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: scale(1.07);\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size:smaller;\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:active {\r\n    color: var(--yellow);\r\n    text-shadow: -1px 1px 2px #1612069c, -1px 1px 2px var(--yellow);\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 370px) {\r\n  \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 992px) {\r\n    \r\n    .project-details[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        transform: translateY(0);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VudC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2REFBNkQ7QUFDakU7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDJGQUEyRjtJQUUzRiw2Q0FBNkM7SUFDN0MsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsK0RBQStEO0FBQ25FOztBQUtBLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUEsc0RBQXNEOztBQUN0RDs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQix3QkFBd0I7SUFDNUI7O0FBRUo7O0FBRUEsb0VBQW9FOztBQUNwRTs7QUFFQSIsImZpbGUiOiJyZWNlbnQtcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNhcmRzLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5ZGVnLCAjMmQyZDNhIDAlLCAjMmIyYjM1IDEwMCUpO1xyXG59XHJcbi5wcm9qZWN0LWRldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OWRlZywgcmdiYSg0NSwgNDUsIDU4LCAwLjk4KSAwJSwgcmdiYSg0MywgNDMsIDUzLCAwLjk4KSAxMDAlKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOHB4IDAgcmdiYSgxNSwgMTUsIDIwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IDAgcmdiYSgxNSwgMTUsIDIwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41NXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLnByb2plY3QtZGV0YWlscyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IDAuNTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkOmhvdmVyIGltZyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3KTtcclxufVxyXG5cclxuLnJlYWQtbW9yZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6c21hbGxlcjtcclxufVxyXG5cclxuLnJlYWQtbW9yZTpob3ZlciwucmVhZC1tb3JlOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IDFweCAycHggIzE2MTIwNjljLCAtMXB4IDFweCAycHggdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogbWVkaWEgcXVyaWVzICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcbiAgXHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCBiZWxvdykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbiAgICAucHJvamVjdC1kZXRhaWxzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "IWSe":
/*!****************************************************************!*\
  !*** ./src/app/project-section/projects/projects.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json-files/projects.json */ "S08x");
var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json-files/projects.json */ "S08x", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "READ MORE >");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r1.projectImageUrl || "assets/images/project-images/javascript.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title || "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.shortDescription || "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/project-details/", item_r1.id, "");
} }
class ProjectsComponent {
    constructor(location) {
        this.location = location;
        this.projects = _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        console.log(this.projects);
    }
    back() {
        this.location.back();
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-md-12", "flex-div"], [1, "pf-white"], ["href", "#", 1, "read-more", "pf-yellow", 3, "click"], ["class", "col-xs-12 col-sm-6 col-md-4 mt-3", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-6", "col-md-4", "mt-3"], [1, "project-card"], ["width", "100%", "height", "100%", "alt", "project", 3, "src"], [1, "project-details"], ["href", "#", 1, "read-more", "pf-yellow", 3, "routerLink"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_Template_a_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " << BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 10, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".flex-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project-cards-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: var(--yellow);\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n}\r\n\r\n.project-details[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n    padding: 20px;\r\n    transform: translateY(100%);\r\n    background: linear-gradient(159deg, rgba(45, 45, 58, 0.98) 0%, rgba(43, 43, 53, 0.98) 100%);\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    transition: 0.55s ease-in-out;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]:hover   .project-details[_ngcontent-%COMP%] {\r\n    transform: translateY(0);\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: 0.55s ease-in-out;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: scale(1.07);\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    font-size:smaller;\r\n}\r\n\r\n.read-more[_ngcontent-%COMP%]:hover, .read-more[_ngcontent-%COMP%]:active {\r\n    color: var(--yellow);\r\n    text-shadow: -1px 1px 2px #1612069c, -1px 1px 2px var(--yellow);\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 370px) {\r\n  \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 992px) {\r\n    \r\n    .project-details[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        transform: translateY(0);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkRBQTZEO0FBQ2pFOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwyRkFBMkY7SUFFM0YsNkNBQTZDO0lBQzdDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLCtEQUErRDtBQUNuRTs7QUFLQSxpQkFBaUI7O0FBRWpCOztBQUVBOztBQUVBLHNEQUFzRDs7QUFDdEQ7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsd0JBQXdCO0lBQzVCOztBQUVKOztBQUVBLG9FQUFvRTs7QUFDcEU7O0FBRUEiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZHMtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3cpO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICMyZDJkM2EgMCUsICMyYjJiMzUgMTAwJSk7XHJcbn1cclxuLnByb2plY3QtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5ZGVnLCByZ2JhKDQ1LCA0NSwgNTgsIDAuOTgpIDAlLCByZ2JhKDQzLCA0MywgNTMsIDAuOTgpIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjU1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1kZXRhaWxzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogMC41NXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG59XHJcblxyXG4ucmVhZC1tb3JlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xyXG59XHJcblxyXG4ucmVhZC1tb3JlOmhvdmVyLC5yZWFkLW1vcmU6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCAjMTYxMjA2OWMsIC0xcHggMXB4IDJweCB2YXIoLS15ZWxsb3cpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBtZWRpYSBxdXJpZXMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcclxuICBcclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIGJlbG93KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWRldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "MB5E":
/*!****************************************************!*\
  !*** ./src/app/pf-content/pf-content.component.ts ***!
  \****************************************************/
/*! exports provided: PfContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfContentComponent", function() { return PfContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner/banner.component */ "NH0R");
/* harmony import */ var _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pf-skills/pf-skills.component */ "ohzs");
/* harmony import */ var _project_section_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-section/recent-projects/recent-projects.component */ "F+QG");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time-line/time-line.component */ "rnbW");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact-me/contact-me.component */ "nZZ6");






class PfContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
PfContentComponent.ɵfac = function PfContentComponent_Factory(t) { return new (t || PfContentComponent)(); };
PfContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PfContentComponent, selectors: [["app-pf-content"]], decls: 5, vars: 0, consts: [["id", "div-skills"]], template: function PfContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pf-skills", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recent-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-time-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contact-me");
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_2__["PfSkillsComponent"], _project_section_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_3__["RecentProjectsComponent"], _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_4__["TimeLineComponent"], _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_5__["ContactMeComponent"]], styles: [".portf-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(30, 30, 40, 0.88);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 992px) {\r\n \r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBmLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7QUFHQSxpQkFBaUI7QUFFakIsc0RBQXNEO0FBQ3REOztBQUVBO0FBRUEsb0VBQW9FO0FBQ3BFOztBQUVBIiwiZmlsZSI6InBmLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhbm5lciAqL1xyXG4ucG9ydGYtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDQwLCAwLjg4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiBtZWRpYSBxdXJpZXMgKi9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCBiZWxvdykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gXHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "NH0R":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _type_writter_type_writter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type-writter/type-writter.component */ "a/EI");



class BannerComponent {
    constructor(viewportScroller) {
        this.viewportScroller = viewportScroller;
    }
    ngOnInit() {
        this.animateValue('experience', 0, 3, 1000);
        this.animateValue('completed_projects', 0, 4, 1000);
        this.animateValue('worked-projects', 0, 9, 1000);
        this.animateValue('course-completed', 0, 4, 1000);
    }
    animateValue(id, start, end, duration) {
        if (start === end)
            return;
        var range = end - start;
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function () {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    OnClickScroll(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 60, vars: 0, consts: [[1, "container-fluid"], [1, "banner-content-div"], [1, "row"], [1, "col-md-12"], [1, "portf-banner"], [1, "banner-content"], [1, "banner-title"], [1, "pf-white"], ["href", "#div-skills"], [1, "common-button", "mt-3"], [1, "down-arrow", "fa", "fa-angle-down"], ["id", "basic-info", 1, "row", "mt-3"], [1, "col-sm-12", "col-md-12"], [1, "col-6", "col-md-3"], [1, "counter-frame"], [1, "counter-box"], ["id", "experience"], [1, "counter-plus"], [1, "pf-white", "my-4", "mr-0", "text-center"], ["id", "completed_projects"], ["id", "worked-projects"], ["id", "course-completed"], [1, "pf-ls-divider", "mt-4"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover my");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Professional Journey!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-type-writter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Explore Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Some Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Years Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Complete Start to End Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Worked on Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Online Courses Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_type_writter_type_writter_component__WEBPACK_IMPORTED_MODULE_2__["TypeWritterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\r\n\r\n.banner-content-div[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n}\r\n\r\n.portf-banner[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-image: url('back-ground.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.portf-banner[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%);\r\n}\r\n\r\n.banner-title[_ngcontent-%COMP%] {\r\n    padding: 35px 45px;\r\n}\r\n\r\n.banner-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.down-arrow[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    margin: 0px;\r\n    position: relative;\r\n    top: 2px;\r\n    left: 3px;\r\n}\r\n\r\n\r\n\r\n.counter-box[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    color: var(--yellow);\r\n}\r\n\r\n.counter-plus[_ngcontent-%COMP%] {\r\n    margin-left: 3px;\r\n}\r\n\r\n.counter-frame[_ngcontent-%COMP%], .flex-basic[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 992px) {\r\n \r\n    .banner-title[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        padding-right: 3px;\r\n        padding-left: 3px;\r\n    }\r\n\r\n    .banner-content-div[_ngcontent-%COMP%] {\r\n        padding-top: 0px;\r\n    }\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjs7QUFFckY7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0NBQTBEO0lBQzFELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwSEFBMEg7QUFDOUg7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFJQSxpQkFBaUI7O0FBRWpCLHNEQUFzRDs7QUFDdEQ7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7O0FBR0o7O0FBRUEsb0VBQW9FOztBQUNwRTs7QUFFQSIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYmFubmVyLWNvbnRlbnQtZGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucG9ydGYtYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFjay1ncm91bmQuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9ydGYtYmFubmVyIC5iYW5uZXItY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0NSwgNDUsIDU4LCAwLjkpIDE1JSwgcmdiYSg0NSwgNDUsIDU4LCAwLjcpIDUwJSwgcmdiYSg0MywgNDMsIDUzLCAwLjcpIDEwMCUpO1xyXG59XHJcblxyXG4uYmFubmVyLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDM1cHggNDVweDtcclxufVxyXG4uYmFubmVyLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4uZG93bi1hcnJvdyB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDNweDtcclxufVxyXG5cclxuLyogY291bnRlcnMgKi9cclxuXHJcbi5jb3VudGVyLWJveCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XHJcbn1cclxuXHJcbi5jb3VudGVyLXBsdXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLmNvdW50ZXItZnJhbWUsLmZsZXgtYmFzaWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBtZWRpYSBxdXJpZXMgKi9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCBiZWxvdykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gXHJcbiAgICAuYmFubmVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItY29udGVudC1kaXYge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "S08x":
/*!*********************************************!*\
  !*** ./src/assets/json-files/projects.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"title\":\"Xypo\",\"shortDescription\":\"Front-End Practice Project\",\"description\":\"Xypo Project is a project where everyone can learn any programming languages.<br><br>This project is made only for practice purpose.<br><br>Click this link to go to the project: <a href='https://aashishvishh.github.io/Xypo-Project/' target='_blank'>Xypo</a>.\",\"company\":\"-\",\"technologyUsed\":\"HTML, CSS, JavaScript\",\"databaseUsed\":\"-\",\"projectImageUrl\":\"assets/images/project-images/Xypo.PNG\"},{\"id\":\"2\",\"title\":\"Portfolio\",\"shortDescription\":\"My Portfolio\",\"description\":\"Made This Portfolio for applying for companies and getting freelance project.<br><br>Made Portfolio using angular for practicing Angular\",\"company\":\"-\",\"technologyUsed\":\"Angular, TypeScript, CSS, Bootstrap\",\"databaseUsed\":\"-\",\"projectImageUrl\":\"assets/images/project-images/Portfolio.PNG\"},{\"id\":\"3\",\"title\":\"Dating Web App\",\"shortDescription\":\"Dating Application\",\"description\":\"Dating Application : has features like online chatting using SignalR <br>Filter Section to filter according to age groups. <br> <br> This project is also made for practice purpose.\",\"company\":\"-\",\"technologyUsed\":\"Asp.Net Core 3.0, Angular 11, Bootstrap, SQL Server 2018\",\"databaseUsed\":\"SQL Server 2016.\",\"projectImageUrl\":\"assets/images/project-images/DatingApp.PNG\"},{\"id\":\"3\",\"title\":\"Insta Mix (Mobile View)\",\"shortDescription\":\"Life Insuarance Project\",\"description\":\"Insta Mix is a HDFC Life Insurance project.<br>My work towards this project is to develop new modules of this project and make changes according to the requirements\",\"company\":\"DATACOMP WEB TECHNOLOGIES PVT. LTD.\",\"technologyUsed\":\"Asp.Net, JavaScript, Bootstrap, SQL Server 2016.\",\"databaseUsed\":\"SQL Server 2014.\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"},{\"id\":\"4\",\"title\":\"MOAQUA\",\"shortDescription\":\"Water level measuring application\",\"description\":\"MOAQUA (Monitor Aqua) is a IOT based application which Monitor and Controls the Water level of the tanks which is used by Commercial and Residential Buildings to Reduce the Water wastage.<br>My goal towards application was to Design and Build the Web based Mobile application which communicate with IOT application through API to On or Off the motors, display the water levels and the daily report of hourly water consumption and motors used.\",\"company\":\"TRANSOVATIVE SOLUTIONS PVT LTD.\",\"technologyUsed\":\"Asp.Net, JavaScript, Bootstrap, SQL Server 2016\",\"databaseUsed\":\"SQL Server 2016\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"},{\"id\":\"5\",\"title\":\"Birds-I\",\"shortDescription\":\"surveillance\",\"description\":\"Birds-I is a product which provides live video monitoring of Atm sites over the web browser and mobile App. <br>It Provides Alert based ticketing system along with automated actions and notifications which,reduces the manual intervention and increases the productivity. <br>Birds-I is used by clients such as, Safesense, Advait and Global Force.,<br><br>My goal towards this project was to build and handle these projects on different severs according to, different Client.\",\"company\":\"TRANSOVATIVE SOLUTIONS PVT LTD.\",\"technologyUsed\":\"Asp.Net, Javascript, Bootstrap, SQL Server 2016.\",\"databaseUsed\":\"SQL Server 2014.\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"},{\"id\":\"6\",\"title\":\"Jotun Rewards\",\"shortDescription\":\"Reward system based on paint purchase\",\"description\":\"Jotun Rewards is Web based portal for Jotun Paints Client. <br>It is a reward management-based portal where Shop Dealers of Jotun Paints Enters Points against the Painter who buys paints from Jotun Paints and they get Points for each Paint boxes which they can redeem in the form of Jotun Cards which they can use to buy any Products from Jotun according to the Amount in Card.<br><br>My work towards this project was to handle the project and to make changes accordingly. <br><br><u class='text-white'>Jotun Web App</u></b><br>Jotun Rewards App is Web based Mobile Application same as Jotun Rewards Portal.<br>My goals towards this project was to rebuilt to Jotun Rewards Portal its database structure and design for Mobile application with barcode scanning feature in it.\",\"company\":\"TRANSOVATIVE SOLUTIONS PVT LTD.\",\"technologyUsed\":\"Asp.Net, Javascript, Bootstrap, SQL Server 2016\",\"databaseUsed\":\"SQL Server 2016.\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"},{\"id\":\"7\",\"title\":\"Project Tool\",\"shortDescription\":\"Tool to manage all the Projects at one portal\",\"description\":\"Project Tool is a Web Portal ‘Requirement Management Tool’ used internally by Transovative where Each user according to their role works accordingly to the Requirement assigned to him on Project Tool and they keep a track of their Projects. <br>This Tool also Generates the KPI (Key Performance Indicator) according to their performance against the Requirements.<br> My goal towards this project is to design the database structure build the Project and handle it.\",\"company\":\"TRANSOVATIVE SOLUTIONS PVT LTD.\",\"technologyUsed\":\"Asp.Net, Javascript, Bootstrap, SQL Server 2016\",\"databaseUsed\":\"SQL Server 2018.\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"},{\"id\":\"8\",\"title\":\"Dating Web App\",\"shortDescription\":\"Dating Application\",\"description\":\"Dating Application : has features like online chatting using SignalR <br>Filter Section to filter according to age groups. <br> <br> This project is also made for practice purpose.\",\"company\":\"-\",\"technologyUsed\":\"Asp.Net Core 3.0, Angular 11, Bootstrap, SQL Server 2018\",\"databaseUsed\":\"SQL Server 2016.\",\"projectImageUrl\":\"assets/images/project-images/javascript.jpg\"}]");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-bar/info-bar.component */ "h0jZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'Ashish-Portfolio';
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.metaService.addTags([
            { name: 'keywords', content: 'Portfolio, Angular, FullStalkDeveloper' },
            { name: 'description', content: 'Porfolio of my software development journey' },
            { name: 'theme-color', content: '#20202a' },
        ]);
        this.InitializingEvents();
    }
    InitializingEvents() {
        const menuBtn = document.querySelector('#menuBtn');
        const closeSideNavBtn = document.querySelector('#close-sidenav');
        const sideNav = document.querySelector('#sideNav');
        const mediaMaxWidth992 = window.matchMedia("(min-width: 992px)");
        let list = sideNav.querySelectorAll('*');
        let arrElements = Array.from(list);
        menuBtn.addEventListener('click', () => {
            if (sideNav.style.transform == "translateX(-290px)") {
                sideNav.style.transform = "translateX(0px)";
            }
            else {
                sideNav.style.transform = "translateX(-290px)";
            }
        });
        closeSideNavBtn.addEventListener('click', () => {
            if (sideNav.style.transform == "translateX(-290px)") {
                sideNav.style.transform = "translateX(0px)";
            }
            else {
                sideNav.style.transform = "translateX(-290px)";
            }
        });
        mediaMaxWidth992.addEventListener("change", (e) => {
            if (e.matches) {
                sideNav.style.transform = "none";
            }
            else {
                sideNav.style.transform = "translateX(-290px)";
            }
        });
        this.checkScreenWidth(mediaMaxWidth992, sideNav);
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (!arrElements.includes(event.target) && event.target.id != menuBtn.id) {
                if (sideNav.style.transform == "translateX(0px)") {
                    sideNav.style.transform = "translateX(-290px)";
                }
            }
        };
    }
    checkScreenWidth(mediaQuery, sideNav) {
        if (mediaQuery.matches) {
            sideNav.style.transform = "none";
        }
        else {
            sideNav.style.transform = "translateX(-290px)";
        }
    }
    onActivate(event) {
        window.scrollTo(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "main-body"], [1, "portfolio-container"], ["id", "sideNav", 1, "portfolio-info-bar"], ["id", "close-sidenav", 1, "close-nav", "fa", "fa-angle-double-left"], [1, "portfolio-content"], [1, "portf-container"], ["id", "nav-bar", 1, "nav-bar"], [1, "mb-0", "text-white", "text-center"], [1, "fa", "fa-briefcase"], ["id", "menuBtn", 1, "menu-box-button", "fa", "fa-bars"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-info-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "router-outlet", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_12_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_2__["InfoBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".nav-bar[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    top:0;\r\n    height: 60px;\r\n    background:#20202a;\r\n    \r\n    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.6);\r\n    display: none;\r\n    z-index: 200;\r\n}\r\n.menu-box-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    height: 50px;\r\n    width: 50px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: larger;\r\n    cursor: pointer;\r\n    z-index: 200;\r\n}\r\n\r\n.main-body[_ngcontent-%COMP%] {\r\n    \r\n    background: #191923;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.portfolio-container[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 1290px;\r\n    margin: auto;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);\r\n}\r\n.portfolio-info-bar[_ngcontent-%COMP%] {\r\n    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);\r\n    height: 100%;\r\n    width: 290px;\r\n    min-width: 290px;\r\n    position: relative;\r\n    z-index: 1000;\r\n    transition: 0.55s;\r\n    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.6);\r\n}\r\n.portfolio-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow:hidden;\r\n    background-image: url('back-ground.jpg');\r\n    background-size: cover;\r\n    background-position-y: -110px;\r\n    background-repeat: no-repeat;\r\n    transition: 0.55s;\r\n}\r\n.close-nav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0px;\r\n    right: 0px;\r\n    z-index: 100000;\r\n    height: 60px;\r\n    width: 60px;\r\n    font-size: x-large;\r\n}\r\n\r\n.portf-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(30, 30, 40, 0.88);\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n    \r\n    .nav-bar[_ngcontent-%COMP%] {\r\n        padding: 15px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    .portfolio-info-bar[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        transform: translateX(-290px);\r\n    } \r\n\r\n    .close-nav[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    \r\n\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtJQUNoQixLQUFLO0lBQ0wsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFJQSxZQUFZO0FBR1o7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkZBQTJGO0FBQy9GO0FBRUE7SUFDSSwyRkFBMkY7SUFDM0YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0NBQXVEO0lBQ3ZELHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUEsWUFBWTtBQUVaO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0FBQ3BCO0FBS0Esa0JBQWtCO0FBRWxCLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUVBLHNEQUFzRDtBQUN0RDs7SUFFSTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztBQUVKO0FBRUE7OztBQUdBO0FBRUEsb0VBQW9FO0FBQ3BFOztBQUVBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmF2YmFyICovXHJcbi5uYXYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6MDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IzIwMjAyYTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4yKTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcbn1cclxuXHJcbi5tZW51LWJveC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBuYXYtZW5kICovXHJcblxyXG5cclxuLm1haW4tYm9keSB7XHJcbiAgICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkyMztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjkwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OWRlZywgcmdiYSgzNywgMzcsIDUwLCAwLjk4KSAwJSwgcmdiYSgzNSwgMzUsIDQ1LCAwLjk4KSAxMDAlKTtcclxufVxyXG5cclxuLnBvcnRmb2xpby1pbmZvLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5ZGVnLCByZ2JhKDM3LCAzNywgNTAsIDAuOTgpIDAlLCByZ2JhKDM1LCAzNSwgNDUsIDAuOTgpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyOTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjU1cztcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLnBvcnRmb2xpby1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmFjay1ncm91bmQuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjU1cztcclxufVxyXG5cclxuLmNsb3NlLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi8qIGNvbnRlbnQgKi9cclxuXHJcbi5wb3J0Zi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMwLCAzMCwgNDAsIDAuODgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogbWVkaWEgcXVlcmllcyAqL1xyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCBiZWxvdykgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbiAgICAubmF2LWJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8taW5mby1iYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI5MHB4KTtcclxuICAgIH0gXHJcblxyXG4gICAgLmNsb3NlLW5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");
/* harmony import */ var _info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-bar/info-bar.component */ "h0jZ");
/* harmony import */ var _pf_content_pf_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pf-content/pf-content.component */ "MB5E");
/* harmony import */ var _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pf-skills/pf-skills.component */ "ohzs");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time-line/time-line.component */ "rnbW");
/* harmony import */ var _type_writter_type_writter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type-writter/type-writter.component */ "a/EI");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _project_section_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-section/recent-projects/recent-projects.component */ "F+QG");
/* harmony import */ var _project_section_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-section/projects/projects.component */ "IWSe");
/* harmony import */ var _project_section_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project-section/project-details/project-details.component */ "go/b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_10__["NgCircleProgressModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__["ContactMeComponent"],
        _info_bar_info_bar_component__WEBPACK_IMPORTED_MODULE_5__["InfoBarComponent"],
        _pf_content_pf_content_component__WEBPACK_IMPORTED_MODULE_6__["PfContentComponent"],
        _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_7__["PfSkillsComponent"],
        _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_8__["TimeLineComponent"],
        _type_writter_type_writter_component__WEBPACK_IMPORTED_MODULE_9__["TypeWritterComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _project_section_recent_projects_recent_projects_component__WEBPACK_IMPORTED_MODULE_13__["RecentProjectsComponent"],
        _project_section_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
        _project_section_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_10__["NgCircleProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "a/EI":
/*!********************************************************!*\
  !*** ./src/app/type-writter/type-writter.component.ts ***!
  \********************************************************/
/*! exports provided: TypeWritterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeWritterComponent", function() { return TypeWritterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TypeWritterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypeWritterComponent.ɵfac = function TypeWritterComponent_Factory(t) { return new (t || TypeWritterComponent)(); };
TypeWritterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypeWritterComponent, selectors: [["app-type-writter"]], decls: 13, vars: 0, consts: [[1, "typing-content"], [1, "pf-white"], [1, "pf-yellow"], [1, "typing-demo", "pf-white"]], template: function TypeWritterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I build web applications! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: monospace;\r\n    font-weight: 600px;\r\n}\r\n\r\n.typing-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: medium;\r\n    font-size: x-large;\r\n}\r\n\r\n.typing-demo[_ngcontent-%COMP%] {\r\n  width: 26ch;\r\n  animation: typing 2s steps(26), blink .5s step-end infinite alternate;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  border-right: 3px solid;\r\n  font-family: monospace;\r\n  \r\n}\r\n\r\n@keyframes typing {\r\n  from {\r\n    width: 0\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  50% {\r\n    border-color: transparent\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 992px) {\r\n  \r\n  .typing-content[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    font-size: small;\r\n    word-wrap: break-word;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUtd3JpdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxRUFBcUU7RUFDckUsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBRUEsc0RBQXNEOztBQUN0RDs7RUFFRTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztBQUVGOztBQUVBLG9FQUFvRTs7QUFDcEU7O0FBRUEiLCJmaWxlIjoidHlwZS13cml0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi50eXBpbmctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4udHlwaW5nLWRlbW8ge1xyXG4gIHdpZHRoOiAyNmNoO1xyXG4gIGFuaW1hdGlvbjogdHlwaW5nIDJzIHN0ZXBzKDI2KSwgYmxpbmsgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBpbmcge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDBcclxuICB9XHJcbn1cclxuICAgIFxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICA1MCUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIGJlbG93KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgXHJcbiAgLnR5cGluZy1jb250ZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.currentYear = (new Date()).getFullYear().toString();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [["id", "footer", 1, "card"], ["id", "year-id"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ashish Vishwakarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Theme author : Ashish Vishwakarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentYear);
    } }, styles: ["#footer[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    border-radius: 0;\r\n    padding:15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    font-size: smaller;\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2REFBNkQ7QUFDakUiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2Zvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU5ZGVnLCAjMmQyZDNhIDAlLCAjMmIyYjM1IDEwMCUpO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "go/b":
/*!******************************************************************************!*\
  !*** ./src/app/project-section/project-details/project-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/json-files/projects.json */ "S08x");
var _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json-files/projects.json */ "S08x", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProjectDetailsComponent {
    constructor(_location, route) {
        this._location = _location;
        this.route = route;
        this.projects = _assets_json_files_projects_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
        // console.log(this.route.snapshot.paramMap.get('id'));
        // console.log(this.projects);
        this.loadData();
    }
    back() {
        this._location.back();
    }
    loadData() {
        this.project = this.projects.find(p => p.id === this.route.snapshot.paramMap.get('id'));
        document.getElementById('project-desc').innerHTML = this.project.description;
        console.log(this.project);
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 36, vars: 4, consts: [[1, "container-fluid"], [1, "row", "my-2"], [1, "col-12", "text-right"], ["href", "#", 1, "read-more", "pf-yellow", 3, "click"], [1, "pf-ls-divider", "my-2"], [1, "row"], [1, "col-12"], [1, "project-img"], ["width", "100%", "height", "100%", "alt", "javascript", 3, "src"], [1, "project-details-card", "card"], [1, "card-body"], [1, "text-white"], [1, "pf-ls-divider"], [1, "project-description", "mt-3"], ["id", "project-desc"], [1, "col-md-6", "col-xs-12", "mt-2"], [1, "mt-3"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_a_click_3_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " << BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, voluptas repellat ratione nobis voluptatem saepe placeat hic enim, temporibus illum facere tenetur. Impedit doloremque dolores non obcaecati ipsa reiciendis nulla?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Skills Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Worked in Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.project.projectImageUrl || "assets/images/project-images/javascript.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.title || "Project-Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.technologyUsed || "Project-Technology used");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.company || "Project-Company");
    } }, styles: [".project-details-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    margin-right: 45px;\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n    padding:10px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    border-radius: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELFlBQVk7SUFDWixtQkFBbUI7SUFFbkIsNkNBQTZDO0lBQzdDLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWRldGFpbHMtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICMyZDJkM2EgMCUsICMyYjJiMzUgMTAwJSk7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "h0jZ":
/*!************************************************!*\
  !*** ./src/app/info-bar/info-bar.component.ts ***!
  \************************************************/
/*! exports provided: InfoBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBarComponent", function() { return InfoBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InfoBarComponent {
    constructor() {
        this.getAge = () => {
            var today = new Date();
            var birthDate = new Date('15 Feb 1995');
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
    }
    ngOnInit() {
    }
}
InfoBarComponent.ɵfac = function InfoBarComponent_Factory(t) { return new (t || InfoBarComponent)(); };
InfoBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoBarComponent, selectors: [["app-info-bar"]], decls: 80, vars: 1, consts: [[1, "porfolio-info-wrapper"], [1, "portfolio-header"], ["src", "assets/images/Profile.png", "width", "90px", "alt", "Profile", 1, "rounded-circle"], [1, "pf-white", "m-2"], [1, "pf-sm-text"], ["href", "https://github.com/AashishVishh/My-Portfolio/raw/master/assets/images/Ashishkumar%20Vishwakarma%20CV.pdf", "target", "_blank", 1, "download-cv"], [1, "fa", "fa-download"], ["id", "portf-info-content", 1, "portfolio-info-content"], [1, "personaldetail"], [1, "personaldetails-list"], [1, "pf-white"], [1, "pf-ls-divider"], [1, "skill-progressbar"], [1, "skills", "mt-4"], [1, "progress", "progress-height"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "90%"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "85%"], [1, "pf-ls-divider", "my-4"], [1, "mt-2"], [1, "fa", "fa-check", "pf-yellow"], [1, "portfolio-social"], ["href", "https://www.linkedin.com/in/ashishkumar-vishwakarma-845681142", "target", "_blank"], [1, "fa", "fa-linkedin"], ["href", "https://www.facebook.com/aashish.vvish"], [1, "fa", "fa-facebook"], ["href", "https://github.com/AashishVishh"], [1, "fa", "fa-github"], ["href", "https://www.instagram.com/ashishvish_gamedev"], [1, "fa", "fa-instagram"], ["href", ""], [1, "fa", "fa-twitter"]], template: function InfoBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ashish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vishwakarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Residence:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Thane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Git knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " TFS knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAge());
    } }, styles: [".porfolio-info-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items:center;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.portfolio-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 99999;\r\n    width: 100%;\r\n    padding: 30px;\r\n    height: 240px;\r\n    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);\r\n    text-align: center;\r\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);\r\n}\r\n\r\n.download-cv[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #8c8c8e;\r\n}\r\n\r\n.portfolio-social[_ngcontent-%COMP%] {\r\n    color: #8c8c8e;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 0 35px;\r\n    height: 50px;\r\n    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    \r\n    width: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n.portfolio-info-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n    background-color: #20202a;\r\n    padding: 20px 30px 90px 30px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.portfolio-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #8c8c8e;\r\n}\r\n\r\n.personaldetails-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.personaldetails-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.progress-height[_ngcontent-%COMP%] {\r\n  height: 4px;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkZBQTJGO0lBQzNGLGtCQUFrQjtJQUVsQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFHZCxhQUFhO0lBR2IsbUJBQW1CO0lBR25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJGQUEyRjtJQUUzRiw2Q0FBNkM7O0lBRTdDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiaW5mby1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3Jmb2xpby1pbmZvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsIHJnYmEoMzcsIDM3LCA1MCwgMC45OCkgMCUsIHJnYmEoMzUsIDM1LCA0NSwgMC45OCkgMTAwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4xKTtcclxufVxyXG5cclxuLmRvd25sb2FkLWN2IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjOGM4YzhlO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLXNvY2lhbCB7XHJcbiAgICBjb2xvcjogIzhjOGM4ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsIHJnYmEoMzcsIDM3LCA1MCwgMC45OCkgMCUsIHJnYmEoMzUsIDM1LCA0NSwgMC45OCkgMTAwJSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4yKTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taW5mby1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMjBweCAzMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyYTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCA5MHB4IDMwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLXNvY2lhbCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjOGM4YzhlO1xyXG59XHJcblxyXG4ucGVyc29uYWxkZXRhaWxzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnBlcnNvbmFsZGV0YWlscy1saXN0IGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1oZWlnaHQge1xyXG4gIGhlaWdodDogNHB4O1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "nZZ6":
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(); };
ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], decls: 39, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-md-12"], [1, "pf-white"], ["role", "alert", 1, "alert", "alert-warning"], [1, "row", "mt-3", "mb-3"], [1, "card", "p-4"], [1, "form-group"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "placeholder", "Name", 1, "form-control"], [1, "input-group-prepend", "text-center"], ["type", "email", "placeholder", "Email", 1, "form-control"], [1, "fa", "fa-book"], ["type", "text", "placeholder", "Subject", 1, "form-control"], [1, "fa", "fa-envelope"], ["placeholder", "Message", "rows", "3", 1, "form-control"], [1, "common-button", "mt-3"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in touch - ashishvishh.r@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This module is currently not working due to some technical issue you may contact me on this email address - ashishvishh.r@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    border-radius: 0;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%] {\r\n    border-radius: 0%;\r\n    color: #20202a;\r\n    background-color: var(--yellow);\r\n    width: 40px;\r\n    border-color: var(--yellow);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    background-color: #20202a;\r\n    border: 0;\r\n    font-size: small;\r\n    outline: 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:hover{\r\n    background-color: #20202a;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n    background-color: #20202a;\r\n    border: 1px solid var(--yellow);\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZEQUE2RDtJQUU3RCw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEIiLCJmaWxlIjoiY29udGFjdC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OWRlZywgIzJkMmQzYSAwJSwgIzJiMmIzNSAxMDAlKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOHB4IDAgcmdiYSgxNSwgMTUsIDIwLCAwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IDAgcmdiYSgxNSwgMTUsIDIwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQsLmlucHV0LWdyb3VwLXByZXBlbmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBjb2xvcjogIzIwMjAyYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0teWVsbG93KTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dCx0ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDJhO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmlucHV0OmhvdmVyLHRleHRhcmVhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyYTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsdGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDJhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0teWVsbG93KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ohzs":
/*!**************************************************!*\
  !*** ./src/app/pf-skills/pf-skills.component.ts ***!
  \**************************************************/
/*! exports provided: PfSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PfSkillsComponent", function() { return PfSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");


class PfSkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PfSkillsComponent.ɵfac = function PfSkillsComponent_Factory(t) { return new (t || PfSkillsComponent)(); };
PfSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PfSkillsComponent, selectors: [["app-pf-skills"]], decls: 64, vars: 30, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-md-12"], [1, "pf-white"], [1, "row", "mt-3"], [1, "col-sm-6", "col-md-6", "text-center"], [3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration", "showBackground", "titleColor", "subtitle", "subtitleColor", "subtitleFontSize", "unitsColor"], [1, "col-sm-12", "col-md-6"], [1, "card"], [1, "card-body"], [1, "skills"], [1, "progress", "progress-height"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "80%"], [1, "skills", "mt-4"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "60%"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "50%"], [1, "pf-ls-divider"]], template: function PfSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frontend Frameworks Known");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skills Known");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Asp.Net MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Asp.Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", 70)("space", -10)("radius", 100)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#ffc107")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 1000)("showBackground", false)("titleColor", "#fff")("subtitle", "Angular")("subtitleColor", "#ffc107")("subtitleFontSize", "22")("unitsColor", "#fff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", 80)("space", -10)("radius", 100)("outerStrokeWidth", 10)("innerStrokeWidth", 10)("outerStrokeColor", "#ffc107")("innerStrokeColor", "#e7e8ea")("animation", true)("animationDuration", 1000)("showBackground", false)("titleColor", "#fff")("subtitle", "Bootstrap")("subtitleColor", "#ffc107")("subtitleFontSize", "22")("unitsColor", "#fff");
    } }, directives: [ng_circle_progress__WEBPACK_IMPORTED_MODULE_1__["CircleProgressComponent"]], styles: [".card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    margin-right: 45px;\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n    padding:10px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n    border-radius: 0;\r\n}\r\n\r\n.progress-height[_ngcontent-%COMP%] {\r\n    height: 4px;\r\n  }\r\n\r\n.skills[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBmLXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkRBQTZEO0lBQzdELFlBQVk7SUFDWixtQkFBbUI7SUFFbkIsNkNBQTZDO0lBQzdDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoicGYtc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICMyZDJkM2EgMCUsICMyYjJiMzUgMTAwJSk7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuICBcclxuLnNraWxscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59Il19 */"] });


/***/ }),

/***/ "rnbW":
/*!**************************************************!*\
  !*** ./src/app/time-line/time-line.component.ts ***!
  \**************************************************/
/*! exports provided: TimeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLineComponent", function() { return TimeLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TimeLineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimeLineComponent.ɵfac = function TimeLineComponent_Factory(t) { return new (t || TimeLineComponent)(); };
TimeLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeLineComponent, selectors: [["app-time-line"]], decls: 74, vars: 0, consts: [[1, "container-fluid"], [1, "row", "mt-3"], [1, "col-sm-12", "col-md-6"], [1, "pf-white"], [1, "timeline"], [1, "timeline-item", "p-4"], [1, "timeline-arrow"], [1, "h5", "text-light", "mb-0"], [1, "small", "text-gray"], [1, "fa", "fa-clock-o", "mr-1"], [1, "text-small", "mt-2", "font-weight-light"], [1, "pf-ls-divider"]], template: function TimeLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Online Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular and .NET Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Online Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Model View Controller in Asp.Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mumbai University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bachelor in Science and Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mumbai University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Higher Secondary College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "St. Xavier's High School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Secondary School Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Work History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "DATACOMP WEB TECHNOLOGIES PVT. LTD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Oct 2020-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Role: Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "TRANSOVATIVE SOLUTIONS PVT. LTD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Nov 2017 - Jan 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Role: Technical Consultant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul.timeline[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    position: relative;\r\n    padding-left: 1.5rem;\r\n}\r\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);\r\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\r\n}\r\n\r\nul.timeline[_ngcontent-%COMP%]:before {\r\n    content: ' ';\r\n    background: #191923;\r\n    \r\n    background-color: var(--yellow);\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 0px;\r\n    width: 6px;\r\n    height: 100%;\r\n    z-index: 50;\r\n    border-radius: 1rem;\r\n}\r\nli.timeline-item[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n}\r\n\r\n.timeline-arrow[_ngcontent-%COMP%] {\r\n    border-top: 0.5rem solid transparent;\r\n    border-right: 0.5rem solid var(--yellow);\r\n    border-bottom: 0.5rem solid transparent;\r\n    display: block;\r\n    position: absolute;\r\n    left: 1rem;\r\n}\r\n\r\nli.timeline-item[_ngcontent-%COMP%]::before {\r\n    content: ' ';\r\n    background: #191923;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid var(--yellow);\r\n    left: -5px;\r\n    width: 16px;\r\n    height: 16px;\r\n    z-index: 50;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSw2REFBNkQ7SUFFN0QsNkNBQTZDO0FBQ2pEO0FBRUMsMkJBQTJCO0FBQzVCO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrRUFBa0U7SUFDbEUsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLG9DQUFvQztJQUNwQyx3Q0FBd0M7SUFDeEMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHNDQUFzQztBQUMxQyIsImZpbGUiOiJ0aW1lLWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRpbWVsaW5lIGhvbGRlciAqL1xyXG51bC50aW1lbGluZSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lIGxpIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTlkZWcsICMyZDJkM2EgMCUsICMyYjJiMzUgMTAwJSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCAyMCwgMC4yKTtcclxufVxyXG5cclxuIC8qIFRpbWVsaW5lIHZlcnRpY2FsIGxpbmUgKi9cclxudWwudGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MjM7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxNTlkZWcsICMyZDJkM2EgMCUsICMyYjJiMzUgMTAwJSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxubGkudGltZWxpbmUtaXRlbSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLyogVGltZWxpbmUgaXRlbSBhcnJvdyAqL1xyXG4udGltZWxpbmUtYXJyb3cge1xyXG4gICAgYm9yZGVyLXRvcDogMC41cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVyZW0gc29saWQgdmFyKC0teWVsbG93KTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMXJlbTtcclxufVxyXG5cclxuLyogVGltZWxpbmUgaXRlbSBjaXJjbGUgbWFya2VyICovXHJcbmxpLnRpbWVsaW5lLWl0ZW06OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTIzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0teWVsbG93KTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");
/* harmony import */ var _pf_content_pf_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pf-content/pf-content.component */ "MB5E");
/* harmony import */ var _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pf-skills/pf-skills.component */ "ohzs");
/* harmony import */ var _project_section_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-section/project-details/project-details.component */ "go/b");
/* harmony import */ var _project_section_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-section/projects/projects.component */ "IWSe");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-line/time-line.component */ "rnbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _pf_content_pf_content_component__WEBPACK_IMPORTED_MODULE_2__["PfContentComponent"] },
    { path: 'home', component: _pf_content_pf_content_component__WEBPACK_IMPORTED_MODULE_2__["PfContentComponent"] },
    { path: 'skills', component: _pf_skills_pf_skills_component__WEBPACK_IMPORTED_MODULE_3__["PfSkillsComponent"] },
    { path: 'history', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_6__["TimeLineComponent"] },
    { path: 'contact', component: _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_1__["ContactMeComponent"] },
    { path: 'projects', component: _project_section_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'project-details/:id', component: _project_section_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailsComponent"] }
    // { path: '**', component: TimeLineComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map