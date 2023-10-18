"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayCategoryList = void 0;
const categories_1 = __importDefault(require("../Models/categories"));
const Util_1 = require("../Util");
function DisplayCategoryList(req, res, next) {
    categories_1.default.find(function (err, categoriesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Categories List', page: 'categories-list', categories: categoriesCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayCategoryList = DisplayCategoryList;
//# sourceMappingURL=categories-list.js.map