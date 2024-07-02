import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';

// onde será configuradas as rotas do sistema
const routes: Routes = [
  // path do componemte, a url do componente
  // componente 
  { path: '', component: NavComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'form', component: FormComponent },
      { path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
