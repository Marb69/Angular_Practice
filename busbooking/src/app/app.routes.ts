import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Admin } from './components/admin/admin';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [

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
