import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//para que funcione los iconos de las paginas fontawsome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 

//para que las formas sean reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './components/headers/headers.component';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// son los controles de usuario para utilizarlos en los componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/autentication/login/login.component';
import { CrearProyectoComponent } from './components/Repadie/crear-proyecto/crear-proyecto.component';
// extras
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent,
    LoginComponent,
    CrearProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
