"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const product_list_1 = require("../Controllers/product-list");
router.get('/product-list', Util_1.AuthGuard, product_list_1.DisplayProductList);
router.get('/add', Util_1.AuthGuard, product_list_1.DisplayAddPage);
router.get('/edit/:id', Util_1.AuthGuard, product_list_1.DisplayEditPage);
router.post('/add', Util_1.AuthGuard, product_list_1.ProcessAddPage);
router.post('/edit/:id', Util_1.AuthGuard, product_list_1.ProcessEditPage);
router.get('/delete/:id', Util_1.AuthGuard, product_list_1.ProcessDeletePage);
router.get('/find/:keyword', Util_1.AuthGuard, product_list_1.ProcessFindProductsByKeyword);
exports.default = router;
//# sourceMappingURL=product-list.js.map