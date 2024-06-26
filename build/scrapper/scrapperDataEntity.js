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
exports.ScrapperDataEntity = void 0;
const typeorm_1 = require("typeorm");
let ScrapperDataEntity = class ScrapperDataEntity extends typeorm_1.BaseEntity {
};
exports.ScrapperDataEntity = ScrapperDataEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], ScrapperDataEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ScrapperDataEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ScrapperDataEntity.prototype, "colorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ScrapperDataEntity.prototype, "isSuspicious", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ScrapperDataEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ScrapperDataEntity.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ScrapperDataEntity.prototype, "feedbackReputation", void 0);
exports.ScrapperDataEntity = ScrapperDataEntity = __decorate([
    (0, typeorm_1.Entity)()
], ScrapperDataEntity);
//# sourceMappingURL=scrapperDataEntity.js.map