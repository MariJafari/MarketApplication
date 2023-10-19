import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayAddPage, DisplayEditPage, DisplayProductList, ProcessAddPage, ProcessDeletePage, ProcessEditPage, ProcessFindProductsByKeyword } from '../Controllers/product-list';

//router.get('/product-list', AuthGuard, DisplayProductList);
router.get('/product-list', DisplayProductList);


/*Display Add Product Page */
//router.get('/add', AuthGuard, DisplayAddPage);
router.get('/add', DisplayAddPage);

/*Display Edit Page */
//router.get('/edit/:id', AuthGuard, DisplayEditPage);
router.get('/edit/:id', DisplayEditPage);



/*Process Add Page */
//router.post('/add', AuthGuard, ProcessAddPage);
router.post('/add', ProcessAddPage);



/*Process Edit Page */
//router.post('/edit/:id', AuthGuard, ProcessEditPage);
router.post('/edit/:id', ProcessEditPage);




/*Process Delete Page */
//router.get('/delete/:id', AuthGuard, ProcessDeletePage);
router.get('/delete/:id', ProcessDeletePage);




/*Find products that contains 'kw' */
// Route to find all products containing a keyword
//router.get('/find/:keyword', AuthGuard, ProcessFindProductsByKeyword);
router.get('/find/:keyword', ProcessFindProductsByKeyword);


export default router;
