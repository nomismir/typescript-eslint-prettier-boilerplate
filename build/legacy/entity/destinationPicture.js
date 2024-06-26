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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationPicture = void 0;
const typeorm_1 = require("typeorm");
const destination_1 = require("./destination");
let DestinationPicture = class DestinationPicture extends typeorm_1.BaseEntity {
};
exports.DestinationPicture = DestinationPicture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DestinationPicture.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DestinationPicture.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DestinationPicture.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DestinationPicture.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], DestinationPicture.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => destination_1.Destination),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", destination_1.Destination)
], DestinationPicture.prototype, "destination", void 0);
exports.DestinationPicture = DestinationPicture = __decorate([
    (0, typeorm_1.Entity)()
], DestinationPicture);
//# sourceMappingURL=destinationPicture.js.map