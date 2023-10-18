"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const categories_list_1 = require("../Controllers/categories-list");
router.get('/categories-list', Util_1.AuthGuard, categories_list_1.DisplayCategoryList);
exports.default = router;
//# sourceMappingURL=categories-list.js.map