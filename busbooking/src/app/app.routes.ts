import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Admin } from './components/admin/admin';
import { Dashboard } from './components/dashboard/dashboard';
import { App } from './app';
import { User } from './components/user/user';

export const routes: Routes = [


    {


        path:'user',
        component:User
    },
    {
        path:'home',
        component:Home
    },
    {

        path:'admin',
        component:Admin
    },
    {

        path:'dashboard',
        component:Dashboard
    }
];
