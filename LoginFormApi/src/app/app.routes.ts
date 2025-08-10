import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { Customer } from './components/customer/customer';
import { SignupForm } from './components/signup-form/signup-form';
import { Dashboard } from './components/dashboard/dashboard';
import { Register } from './components/register/register';
import { Alluser } from './components/alluser/alluser';
import { Updateuser } from './components/updateuser/updateuser';

export const routes: Routes = [


    {

        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        
        path:'login',
        component:Login,
        children:[
            {
                path:'signup',
                component:SignupForm
            }
        ]
    },

    {

        path:'',
        component:Layout,
        children:[

            {
                path:'register',
                component:Register
            },
            {

               path: 'dashboard',
               component:Dashboard
            },
            {

                path:'customer',
                component:Customer
            },{

                path:'alluser',
                component:Alluser
            },{

                path:'updateuser',
                component:Updateuser
            }
        ]
    }
    
];
