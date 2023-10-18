import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

//import { DisplayMovieList } from '../Controllers/movie-list';
import { DisplayProductList } from '../Controllers/product-list';
import { DisplayCategoryList } from '../Controllers/categories-list';

//router.get('/movie-list', AuthGuard, DisplayMovieList);
router.get('/categories-list', AuthGuard, DisplayCategoryList);

export default router;
