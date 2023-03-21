import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddautoecoleComponent } from './components/add-autoecole/add-autoecole.component';
import { autoecoleDetailComponent } from './components/autoecole-detail/autoecole-detail.component';
import { autoecoleListComponent } from './components/autoecole-list/autoecole-list.component';



import { AddpackComponent } from './components/add-pack/add-pack.component';
import { packDetailComponent } from './components/pack-detail/pack-detail.component';
import { packListComponent } from './components/pack-list/pack-list.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    AddautoecoleComponent,
    autoecoleDetailComponent,
    autoecoleListComponent,
    packListComponent,
    AddpackComponent ,
    packDetailComponent,
    AcceuilComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
