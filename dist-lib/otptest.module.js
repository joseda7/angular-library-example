"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hello_component_1 = require("./hello/hello.component");
var users_service_1 = require("./users.service");
var http_1 = require("@angular/http");
var OtptestModule = /** @class */ (function () {
    function OtptestModule() {
    }
    OtptestModule_1 = OtptestModule;
    OtptestModule.forRoot = function () {
        return {
            ngModule: OtptestModule_1,
            providers: [users_service_1.UsersService]
        };
    };
    var OtptestModule_1;
    OtptestModule = OtptestModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule
            ],
            declarations: [hello_component_1.HelloComponent],
            exports: [hello_component_1.HelloComponent]
        })
    ], OtptestModule);
    return OtptestModule;
}());
exports.OtptestModule = OtptestModule;
