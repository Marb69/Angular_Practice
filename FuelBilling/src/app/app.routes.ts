import { Routes } from '@angular/router';
import { Main } from './components/layout/main/main';
import { Billing } from './components/billing/billing';
import { Dashboard } from './components/dashboard/dashboard';
import { AddBilling } from './components/add-billing/add-billing';
import { UpdateBilling } from './components/update-billing/update-billing';

export const routes: Routes = [

    {
        path:'',
        component:Main,
        children:[

             {

        path:'dashboard',
        component:Dashboard
    },
    {

        path:'displaybilling',
        component:Billing
    },{

        path:'addbilling',
        component:AddBilling
    },{

        path:'updatebilling',
        component:UpdateBilling
    }
        ]
    }
   
];
