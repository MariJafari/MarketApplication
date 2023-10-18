import express from 'express';

import Movie from '../Models/categories';

import { UserDisplayName } from '../Util';

export function DisplayCategoryList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, categoriesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Categories List', page: 'categories-list', categories: categoriesCollection, displayName: UserDisplayName(req) });
    });
}