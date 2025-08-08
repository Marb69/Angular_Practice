import { Routes } from '@angular/router';
import { Get } from './components/get/get';
import { Post } from './components/post/post';
import { Pull } from './components/pull/pull';
import { Delete } from './components/delete/delete';

export const routes: Routes = [


    {
        path:'get',
        component:Get
    },
    {
        path:'post',
        component:Post
    },
    {
        path:'pull',
        component:Pull
    },
    {

        path:'delete',
        component:Delete
    }
    
];
