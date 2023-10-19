"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProductSchema = new Schema({
    Name: String,
    Description: String,
    Price: Number,
    Quantity: Number,
    Category: String
}, {
    collection: "product"
});
const Model = mongoose_1.default.model("Product", ProductSchema);
exports.default = Model;
//# sourceMappingURL=product.js.map