import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentsRegistryComponent } from './students-registry/students-registry.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsHomeComponent } from './students-home/students-home.component';
import { StudentsLoginComponent } from './students-login/students-login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeListComponent } from './mensaje-list/mensaje-list.component';
import { EstadisticaPaneldereComponent } from './estadistica-paneldere/estadistica-paneldere.component';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutLoguedComponent } from './layout-logued/layout-logued.component';

const appRoutes: Routes = [
  { path: '', component: LayoutBasicComponent,children:[
    { path: '', component:StudentsLoginComponent},
    { path: 'student-registry', component: StudentsRegistryComponent },
  ] },
  { path: 'student-home/:email', component: LayoutLoguedComponent,children:[
    { path: '', component:StudentsHomeComponent}
  ] },

  { path: 'student-list', component: StudentsListComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    StudentsRegistryComponent,
    StudentsListComponent,
    StudentsHomeComponent,
    StudentsLoginComponent,
    MensajeComponent,
    MensajeListComponent,
    EstadisticaPaneldereComponent,
    LayoutBasicComponent,
    LayoutLoguedComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
