import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { AnalysisdataComponent } from './paginas/analysisdata/analysisdata.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { MenuadminComponent } from './componentes/menuadmin/menuadmin.component';
import { DatagooglecolabComponent } from './paginas/datagooglecolab/datagooglecolab.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PrediccionComponent } from './paginas/prediccion/prediccion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AnalysisdataComponent,
    EncabezadoComponent,
    AcercadeComponent,
    MenuadminComponent,
    DatagooglecolabComponent,
    DashboardComponent,
    PrediccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
