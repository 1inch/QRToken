(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-module"],{

/***/ "./src/app/redeem/redeem-form/redeem-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 767.98px) {\n\n    #redeem-form {\n        padding-top: 2rem;\n    }\n\n    #redeem-form .row div {\n        border-radius: 0.4rem;\n    }\n}\n\n#redeem-form h3 {\n    text-align: center;\n    font-weight: 300;\n    border-radius: 0.5rem;\n\n    background: #ECE9E6;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#ECE9E6));\n    background: linear-gradient(to bottom, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n#redeem-form .row > div,\n#card-panel .row > div {\n    background: white;\n    padding: 2rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n\n.sk-cube-grid {\n    width: 80px;\n    height: 80px;\n    margin: 100px auto;\n}\n\n.sk-cube-grid .sk-cube {\n    width: 33%;\n    height: 33%;\n    background-color: #333;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s; }\n\n.sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s; }\n\n.sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    } 35% {\n          -webkit-transform: scale3D(0, 0, 1);\n          transform: scale3D(0, 0, 1);\n      }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n    } 35% {\n          -webkit-transform: scale3D(0, 0, 1);\n          transform: scale3D(0, 0, 1);\n      }\n}\n\n.sk-cube-grid h4 {\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZWVtL3JlZGVlbS1mb3JtL3JlZGVlbS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCOztJQUVyQixtQkFBbUIsR0FBRyw4QkFBOEIsR0FDZSwrQkFBK0I7SUFDbEcsdUZBQXdEO0lBQXhELHdEQUF3RCxFQUFFLHFFQUFxRTtBQUNuSTs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QixFQUFFLFVBQVU7QUFDOUM7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDOztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0VBQWtFO0lBQ2xFLDBEQUEwRDtBQUM5RDs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBRTs7QUFDM0I7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUU7O0FBQzNCO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQixFQUFFOztBQUMzQjtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUIsRUFBRTs7QUFDM0I7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUU7O0FBQzNCO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQixFQUFFOztBQUMzQjtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUIsRUFBRTs7QUFDekI7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCLEVBQUU7O0FBQzNCO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQixFQUFFOztBQUUzQjtJQUNJO1FBQ0ksbUNBQW1DO1FBQ25DLDJCQUEyQjtJQUMvQixFQUFFO1VBQ0ksbUNBQW1DO1VBQ25DLDJCQUEyQjtNQUMvQjtBQUNOOztBQUVBO0lBQ0k7UUFDSSxtQ0FBbUM7UUFDbkMsMkJBQTJCO0lBQy9CLEVBQUU7VUFDSSxtQ0FBbUM7VUFDbkMsMkJBQTJCO01BQy9CO0FBQ047O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZWRlZW0vcmVkZWVtLWZvcm0vcmVkZWVtLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xuXG4gICAgI3JlZGVlbS1mb3JtIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgI3JlZGVlbS1mb3JtIC5yb3cgZGl2IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIH1cbn1cblxuI3JlZGVlbS1mb3JtIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG5cbiAgICBiYWNrZ3JvdW5kOiAjRUNFOUU2OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRkZGRiwgI0VDRTlFNik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkZGRkYsICNFQ0U5RTYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbiNyZWRlZW0tZm9ybSAucm93ID4gZGl2LFxuI2NhcmQtcGFuZWwgLnJvdyA+IGRpdiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkgIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG5cbi5zay1jdWJlLWdyaWQge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAzMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBmbG9hdDogbGVmdDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU3IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwczsgfVxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9IDM1JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgfSAzNSUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgIH1cbn1cblxuLnNrLWN1YmUtZ3JpZCBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/redeem/redeem-form/redeem-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!metamask\">\n    <div class=\"container-fluid\" id=\"select-screen\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 text-center pt-4\">\n                <img class=\"d-inline-block mb-4\" src=\"assets/metamask.png\">\n                <h2>Please install Metamask:<br><br><a class=\"btn btn-warning btn-lg\" href=\"https://metamask.io\"\n                                                       target=\"_blank\">https://metamask.io</a></h2>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"metamask\">\n    <div class=\"container-fluid\" [hidden]=\"!loading || done || error\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12\">\n                <div class=\"sk-cube-grid\">\n                    <div class=\"sk-cube sk-cube1\"></div>\n                    <div class=\"sk-cube sk-cube2\"></div>\n                    <div class=\"sk-cube sk-cube3\"></div>\n                    <div class=\"sk-cube sk-cube4\"></div>\n                    <div class=\"sk-cube sk-cube5\"></div>\n                    <div class=\"sk-cube sk-cube6\"></div>\n                    <div class=\"sk-cube sk-cube7\"></div>\n                    <div class=\"sk-cube sk-cube8\"></div>\n                    <div class=\"sk-cube sk-cube9\"></div>\n                    <h4>{{status}}</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container-fluid\" [hidden]=\"!isRedeemed || loading || done || error\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 text-center\">\n                <h3 class=\"mt-5\">QRToken is already taken!</h3>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container-fluid\" [hidden]=\"!done || loading || error\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 text-center\">\n                <h3 class=\"mt-5\">Your tokens were transmitted.</h3>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container-fluid\" [hidden]=\"!error || loading || done\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 text-center\">\n                <h3 class=\"mt-5\">An error has occurred.</h3>\n            </div>\n        </div>\n    </div>\n\n    <div [hidden]=\"loading || isRedeemed || done || error\">\n        <div class=\"container\" id=\"redeem-form\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-sm-8 ml-auto mr-auto\">\n                    <h3 class=\"pb-3 pt-3\">{{tokensAmount}} {{tokenName}}</h3>\n\n                    <hr>\n\n                    <form (ngSubmit)=\"f.form.valid && onSubmit()\" name=\"form\" #f=\"ngForm\" novalidate>\n                        <div class=\"form-row pt-0 pb-2\">\n                            <div class=\"col-12\">\n                                <input [(ngModel)]=\"receiver\" class=\"form-control\" minlength=\"42\" maxlength=\"42\" required id=\"receiver\" name=\"receiver\"\n                                       placeholder=\"Ethereum Wallet Address\"\n                                       type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-row pt-0\" [hidden]=\"!withFee || !fee\">\n                            <div class=\"col-12\">\n                                <label>Transaction Fee: {{fee}} %</label>\n                            </div>\n                        </div>\n\n                        <div class=\"p-0 mt-3\" style=\"text-align: center\">\n                            <button class=\"btn btn-success btn-lg\" [disabled]=\"!f.form.valid || (withFee && fee === 0)\" title=\"Approve transfer coins.\"\n                                    type=\"submit\">\n                                REDEEM YOUR TOKENS\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/redeem/redeem-form/redeem-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/redeem/redeem-form/redeem-form.component.ts ***!
  \*************************************************************/
/*! exports provided: RedeemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemFormComponent", function() { return RedeemFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/qrtoken-smart-contract */ "./src/app/util/qrtoken-smart-contract.ts");
/* harmony import */ var _util_merkle_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/merkle-tree */ "./src/app/util/merkle-tree.ts");
/* harmony import */ var _util_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/tokens */ "./src/app/util/tokens.ts");
/* harmony import */ var _util_wallet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/wallet.service */ "./src/app/util/wallet.service.ts");
/* harmony import */ var _util_zero_fee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/zero-fee */ "./src/app/util/zero-fee.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var qrtokenContractArtifacts = __webpack_require__(/*! ../../util/QRTokenABI.json */ "./src/app/util/QRTokenABI.json");
var kyberContractArtifacts = __webpack_require__(/*! ../../util/KyberABI.json */ "./src/app/util/KyberABI.json");
var KYBER_ETHER_TOKEN_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
var KYBER_SMART_CONTRACT_ADDRESS = '0x818e6fecd516ecc3849daf6845e3ec868087b755';
var RedeemFormComponent = /** @class */ (function () {
    function RedeemFormComponent(route, router, web3Service, walletService, zone, http) {
        this.route = route;
        this.router = router;
        this.web3Service = web3Service;
        this.walletService = walletService;
        this.zone = zone;
        this.http = http;
        this.loading = false;
        this.error = false;
        this.status = '';
        this.done = false;
        this.fee = 0;
        this.withFee = false;
        this.metamask = false;
        this.tokens = _util_tokens__WEBPACK_IMPORTED_MODULE_6__["TOKENS"];
    }
    RedeemFormComponent.prototype.processParams = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, buffer, contract_1, privateKey, proof, proofs, slice, _a, root_1, index_1, distribution_1, _loop_1, this_1, _i, _b, token, state_1, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.loading = true;
                                return [2 /*return*/];
                            });
                        }); });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        data = this.route.snapshot.paramMap.get('data')
                            .replace(/-/g, '/')
                            .replace(/_/g, '+');
                        buffer = new Buffer(data, 'base64');
                        privateKey = void 0;
                        if (this.router.url.substr(0, 3) === '/r/') {
                            contract_1 = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, _util_qrtoken_smart_contract__WEBPACK_IMPORTED_MODULE_4__["QRTOKEN_SMART_CONTRACT_ADDRESS_v1"]);
                            privateKey = buffer.slice(0, 32);
                            this.proof = buffer.slice(32);
                            this.version = 1;
                        }
                        else {
                            contract_1 = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, '0x' + buffer.slice(0, 20).toString('hex'));
                            privateKey = buffer.slice(20, 52);
                            this.proof = buffer.slice(52);
                            this.version = 2;
                        }
                        proof = this.proof;
                        // console.log('privateKey', privateKey.toString('hex'));
                        this.privateKey = privateKey;
                        proofs = [];
                        while (proof.slice(0, 20).length > 0) {
                            slice = proof.slice(0, 20);
                            proof = proof.slice(20);
                            proofs.push(slice.toString('hex'));
                        }
                        this.account = this.web3Service.web3.eth.accounts
                            .privateKeyToAccount('0x' + privateKey.toString('hex'));
                        _a = _util_merkle_tree__WEBPACK_IMPORTED_MODULE_5__["MerkleTree"].applyProof(this.account.address, proofs), root_1 = _a.root, index_1 = _a.index;
                        this.root = root_1;
                        this.index = index_1;
                        this.contract = contract_1;
                        this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4 /*yield*/, contract_1.methods
                                                .redeemed(root_1, index_1)
                                                .call()];
                                    case 1:
                                        _a.isRedeemed = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        if (this.isRedeemed) {
                            this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    this.loading = false;
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, contract_1.methods
                                .distributions('0x' + root_1.toString('hex'))
                                .call()];
                    case 2:
                        distribution_1 = _c.sent();
                        console.log('distribution', distribution_1);
                        _loop_1 = function (token) {
                            if (token.address.toLowerCase() === distribution_1['token'].toLowerCase()) {
                                this_1.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var decimals, gasPriceRequest;
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.tokenName = token.name;
                                                this.token = token;
                                                return [4 /*yield*/, this.walletService.getDecimals(token.address)];
                                            case 1:
                                                decimals = _a.sent();
                                                this.tokensAmount = (distribution_1['sumAmount'] / (Math.pow(10, decimals))) / distribution_1['codesCount'];
                                                gasPriceRequest = this.http.get('https://gasprice.poa.network');
                                                // console.log('lastPrice', lastPrice);
                                                // console.log('expectedRate', expectedRate);
                                                // console.log('slippageRate', slippageRate);
                                                //
                                                // const pairs = this.http.get('https://tracker.kyber.network/api/tokens/pairs');
                                                // pairs.subscribe(d => {
                                                gasPriceRequest.subscribe(function (gasPriceResponse) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                    var kyberContract, _a, expectedRate, slippageRate, lastPrice;
                                                    var _this = this;
                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                // console.log('Token Pair', d['ETH_' + this.token.symbol]);
                                                                // if (d['ETH_' + this.token.symbol]) {
                                                                // const lastPrice = d['ETH_' + this.token.symbol]['lastPrice'];
                                                                this.gasPrice = gasPriceResponse['fast'] * 1e9;
                                                                if (!!this.receiver) return [3 /*break*/, 2];
                                                                kyberContract = new this.web3Service.web3.eth.Contract(kyberContractArtifacts, KYBER_SMART_CONTRACT_ADDRESS);
                                                                return [4 /*yield*/, kyberContract.methods
                                                                        .getExpectedRate(KYBER_ETHER_TOKEN_ADDRESS, this.token.address, 1e15)
                                                                        .call()];
                                                            case 1:
                                                                _a = _b.sent(), expectedRate = _a.expectedRate, slippageRate = _a.slippageRate;
                                                                lastPrice = 1e18 / expectedRate;
                                                                this.fee = 600000 * this.gasPrice / lastPrice / Math.pow(10, 18);
                                                                this.fee = Math.ceil(this.fee * 100 / this.tokensAmount);
                                                                // console.log('Fees', this.fee);
                                                                if (this.fee >= 100) {
                                                                    this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                            this.metamask = true;
                                                                            return [2 /*return*/];
                                                                        });
                                                                    }); });
                                                                }
                                                                _b.label = 2;
                                                            case 2:
                                                                this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                        this.loading = false;
                                                                        return [2 /*return*/];
                                                                    });
                                                                }); });
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return "break";
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _b = this.tokens; _i < _b.length; _i++) {
                            token = _b[_i];
                            state_1 = _loop_1(token);
                            if (state_1 === "break")
                                break;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.loading = false;
                                this.error = true;
                                return [2 /*return*/];
                            });
                        }); });
                        console.log('Error', e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RedeemFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading = true;
                this.web3Service.getAccounts()
                    .subscribe(function (addresses) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.receiver = addresses[0];
                        this.processParams();
                        this.loading = false;
                        return [2 /*return*/];
                    });
                }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.processParams();
                        this.withFee = true;
                        this.loading = false;
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RedeemFormComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.loading = true;
                        return [2 /*return*/];
                    });
                }); });
                this.web3Service.getAccounts()
                    .subscribe(function (addresses) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var signatureObject, signature;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signatureObject = this.account.sign(this.web3Service.web3.utils.keccak256(this.web3Service.web3.utils.padLeft(this.receiver, 40), { encoding: 'hex' }));
                                signature = signatureObject.signature;
                                // console.log('signatureObject', signatureObject);
                                // console.log('Signature', signature);
                                // console.log('Proof', this.proof);
                                return [4 /*yield*/, this.walletService
                                        .transferTokens(addresses[0], signature, this.proof)];
                            case 1:
                                // console.log('signatureObject', signatureObject);
                                // console.log('Signature', signature);
                                // console.log('Proof', this.proof);
                                _a.sent();
                                this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        this.loading = false;
                                        this.done = true;
                                        return [2 /*return*/];
                                    });
                                }); });
                                return [2 /*return*/];
                        }
                    });
                }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var transferAccount, nonce, _a, tx, scope_1, e_2;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                transferAccount = this.web3Service.web3.eth.accounts
                                    .privateKeyToAccount('0x' + _util_zero_fee__WEBPACK_IMPORTED_MODULE_8__["ZERO_FEE"]);
                                this.web3Service.web3.eth.accounts.wallet.add('0x' + _util_zero_fee__WEBPACK_IMPORTED_MODULE_8__["ZERO_FEE"]);
                                this.web3Service.web3.eth.defaultAccount = transferAccount.address;
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, this.web3Service.web3.eth.getTransactionCount(transferAccount.address)];
                            case 2:
                                nonce = _b.sent();
                                _a = this;
                                return [4 /*yield*/, this.contract.methods
                                        .redeemed(this.root, this.index)
                                        .call()];
                            case 3:
                                _a.isRedeemed = _b.sent();
                                console.log('isRedeemed', this.isRedeemed);
                                if (!this.isRedeemed) {
                                    tx = void 0;
                                    if (this.version === 1) {
                                        tx = this.walletService
                                            .transferTokensByZeroTransactionGasFeeV1(this.account, transferAccount.address, this.receiver, this.fee, this.gasPrice, this.proof, nonce);
                                    }
                                    else {
                                        tx = this.walletService
                                            .transferTokensByZeroTransactionGasFee(this.account, transferAccount.address, this.receiver, this.fee, this.gasPrice, this.proof, nonce);
                                    }
                                    console.log('TX', tx);
                                    scope_1 = this;
                                    tx
                                        .once('transactionHash', function (hash) {
                                        var _this = this;
                                        console.log('hash', hash);
                                        scope_1.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                scope_1.done = true;
                                                scope_1.loading = false;
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    })
                                        .once('receipt', function (receipt) {
                                        var _this = this;
                                        console.log('receipt', receipt);
                                        scope_1.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                scope_1.status = '';
                                                scope_1.done = true;
                                                scope_1.loading = false;
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    })
                                        .on('confirmation', function (confNumber, receipt) {
                                        console.log('confNumber', confNumber);
                                        console.log('receipt', receipt);
                                    })
                                        .on('error', function (error) {
                                        console.log('error', error);
                                    })
                                        .then(function (receipt) {
                                        console.log('Receipt', receipt);
                                        _this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                this.done = true;
                                                this.loading = false;
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    })
                                        .catch(function (error) {
                                        console.log('Error', error);
                                        _this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                this.loading = false;
                                                return [2 /*return*/];
                                            });
                                        }); });
                                    });
                                }
                                else {
                                    this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            this.loading = false;
                                            return [2 /*return*/];
                                        });
                                    }); });
                                }
                                return [3 /*break*/, 5];
                            case 4:
                                e_2 = _b.sent();
                                alert(e_2.toString());
                                console.error(e_2);
                                this.zone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        this.loading = false;
                                        return [2 /*return*/];
                                    });
                                }); });
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    RedeemFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem-form',
            template: __webpack_require__(/*! ./redeem-form.component.html */ "./src/app/redeem/redeem-form/redeem-form.component.html"),
            styles: [__webpack_require__(/*! ./redeem-form.component.css */ "./src/app/redeem/redeem-form/redeem-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
            _util_wallet_service__WEBPACK_IMPORTED_MODULE_7__["WalletService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], RedeemFormComponent);
    return RedeemFormComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/redeem/redeem.module.ts":
/*!*****************************************!*\
  !*** ./src/app/redeem/redeem.module.ts ***!
  \*****************************************/
/*! exports provided: RedeemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemModule", function() { return RedeemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeem-form/redeem-form.component */ "./src/app/redeem/redeem-form/redeem-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var routes = [
    {
        path: '',
        component: _redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__["RedeemFormComponent"],
        children: []
    }
];
var RedeemModule = /** @class */ (function () {
    function RedeemModule() {
    }
    RedeemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_redeem_form_redeem_form_component__WEBPACK_IMPORTED_MODULE_3__["RedeemFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], RedeemModule);
    return RedeemModule;
}());



/***/ }),

/***/ "./src/app/util/KyberABI.json":
/*!************************************!*\
  !*** ./src/app/util/KyberABI.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapEtherToToken","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kyberNetworkContract","type":"address"}],"name":"setKyberNetworkContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"}],"name":"trade","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"actualSrcAmount","type":"uint256"},{"indexed":false,"name":"actualDestAmount","type":"uint256"}],"name":"ExecuteTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newNetworkContract","type":"address"},{"indexed":false,"name":"oldNetworkContract","type":"address"}],"name":"KyberNetworkSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}];

/***/ }),

/***/ "./src/app/util/zero-fee.ts":
/*!**********************************!*\
  !*** ./src/app/util/zero-fee.ts ***!
  \**********************************/
/*! exports provided: ZERO_FEE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO_FEE", function() { return ZERO_FEE; });
var ZERO_FEE1 = new Buffer([
    55, 65, 53, 57, 49, 65, 67, 70, 70, 52, 57, 52, 57, 51, 69, 68, 55, 52, 49, 66, 66, 65, 65, 57, 56, 67, 49, 50, 66,
]);
var ZERO_FEE2 = new Buffer([
    68, 53, 69, 65, 69, 48, 67, 69, 66, 67, 57, 51, 67, 68, 67, 49, 57, 66, 57, 65, 67, 50, 49, 65, 49, 53, 56, 53, 66,
    65, 67, 66, 52, 56, 57
]);
var ZERO_FEE = Buffer.concat([ZERO_FEE1, ZERO_FEE2]).toString();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

}]);
//# sourceMappingURL=redeem-redeem-module.js.map