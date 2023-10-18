"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_list_1 = require("../Controllers/product-list");
router.get('/product-list', product_list_1.DisplayProductList);
router.get('/add', product_list_1.DisplayAddPage);
router.get('/edit/:id', product_list_1.DisplayEditPage);
router.post('/add', product_list_1.ProcessAddPage);
router.post('/edit/:id', product_list_1.ProcessEditPage);
router.get('/delete/:id', product_list_1.ProcessDeletePage);
router.get('/find/:keyword', product_list_1.ProcessFindProductsByKeyword);
exports.default = router;
//# sourceMappingURL=product-list.js.map
