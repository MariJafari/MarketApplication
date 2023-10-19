import express from 'express';

import Product from '../Models/product';

import { UserDisplayName } from '../Util';
import { CallbackError } from 'mongoose';

export function DisplayProductList(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    Product.find(function(err, productCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Product List', page: 'product-list', product: productCollection, displayName: UserDisplayName(req) });
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    res.render('index', {title : 'Add' , page: 'edit', product: ' ', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // pass the id to the db and read the product into the edit page
    Product.findById(id, {}, {}, function(err, productToEdit)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // show the edit view with the data
      res.render('index', {title : 'Edit' , page: 'edit', product: productToEdit , displayName: UserDisplayName(req)});
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  // instantiate a new Product to Add
  let newProduct = new Product
  ({
    "Name": req.body.productName,
    "Description": req.body.productDescription,
    "Price": req.body.productPrice,
    "Quantity": req.body.productQuantity,
    "Category": req.body.productCategory
  });

  // Insert the new Product object into the database (movies collection)
  Product.create(newProduct, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new movie has been added -> refresh the movie-list
    res.redirect('/product-list');
  })


}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    // instantiate a new Product to Edit
  let updatedProduct = new Product
  ({
    "_id" : id,
    "Name": req.body.productName,
    "Description": req.body.productDescription,
    "Price": req.body.productPrice,
    "Quantity": req.body.productQuantity,
    "Category": req.body.productCategory
  });

   //update product in the database
   Product.updateOne({_id:id}, updatedProduct, function(err: CallbackError)
   {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful --> go to product-list page
    res.redirect('/product-list');

   })

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id = req.params.id;

    //pass the id to the database and delete the product
    Product.remove({_id:id}, function(err: CallbackError){
        if(err)
        {
          console.error(err);
          res.end(err);
        }

        //delete was successful
        res.redirect('/product-list');
    
    })
   

}

export function ProcessFindProductsByKeyword(req: express.Request, res: express.Response, next: express.NextFunction) :void
{

  

}