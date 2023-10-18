"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CategorySchema = new Schema({
    Name: String
}, {
    collection: "categories"
});
const Model = mongoose_1.default.model("Category", CategorySchema);
exports.default = Model;
//# sourceMappingURL=categories.js.map