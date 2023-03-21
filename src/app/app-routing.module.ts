import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddautoecoleComponent } from './components/add-autoecole/add-autoecole.component';
import { autoecoleDetailComponent } from './components/autoecole-detail/autoecole-detail.component';
import { autoecoleListComponent } from './components/autoecole-list/autoecole-list.component';


import { AddpackComponent } from './components/add-pack/add-pack.component';
import { packDetailComponent } from './components/pack-detail/pack-detail.component';
import { packListComponent } from './components/pack-list/pack-list.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},
  { path: 'autoecole-list', component: autoecoleListComponent },
  { path: 'add-autoecole', component: AddautoecoleComponent },
  { path: 'add-pack', component: AddpackComponent },
  { path: 'edit-book/:id', component: autoecoleDetailComponent },
  { path: 'pack-list', component: packListComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'autoecole-list', component: AcceuilComponent },
  { path: 'edit-autoecole/:id', component: autoecoleDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
