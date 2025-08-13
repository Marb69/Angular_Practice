import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Employee } from './components/employee/employee';
import { Layout } from './components/layout/layout';
import { Login } from './components/login/login';

export const routes: Routes = [

{

   path:'',
   component:Login,
   pathMatch:'full'
        
},
{

    path:'layout',
    component:Layout,
    children:[

        {
            path:'Home',
            component:Home
        },
        {
            path:'employee',
            component:Employee
        }
    ]
}
];
