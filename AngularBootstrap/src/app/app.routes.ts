import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skill } from './components/skill/skill';
import { Project } from './components/project/project';

export const routes: Routes = [

    {
        path:'home',
        component:Home
    },
    {

        path:'about',
        component:About
    },
    {

        path:'skill',
        component:Skill
    },
    {
        path:'project',
        component:Project
    }
];
