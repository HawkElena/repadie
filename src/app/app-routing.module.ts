import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/autentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CrearProyectoComponent } from './components/Repadie/crear-proyecto/crear-proyecto.component';

const routes: Routes = [  {path: '', component: HomeComponent }
,{path: 'login', component: LoginComponent} 
,{path: 'home', component: HomeComponent} 
,{ path: 'proyc', component: CrearProyectoComponent}
,{ path: '*', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
