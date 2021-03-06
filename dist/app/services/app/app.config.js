"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Configuration = (function () {
    function Configuration() {
        //public Server: string = "http://localhost:5000"//;//
        //public FileServer: string = "http://localhost:5000";//
        //public Server: string = "http://localhost:63621"//;//
        //public FileServer: string = "http://localhost:63621";//
        this.Server = "http://localhost:2822"; //
        this.FileServer = "http://localhost:2822"; //
        this.ImageServer = "http://52.35.74.38"; //
    }
    Configuration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Configuration);
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=app.config.js.map