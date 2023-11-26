import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { AnalysisdataComponent } from './paginas/analysisdata/analysisdata.component';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { DatagooglecolabComponent } from './paginas/datagooglecolab/datagooglecolab.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PrediccionComponent } from './paginas/prediccion/prediccion.component';


const routes: Routes = [
  { path: 'home', 
    component: HomeComponent},
  { path: 'login', 
    component: LoginComponent},
  { path: 'data', 
    component: AnalysisdataComponent},
  { path: 'nosotros', 
    component: AcercadeComponent},
  { path: 'analisis', 
    component: DatagooglecolabComponent},
  { path: 'tablero', 
    component: DashboardComponent},
  { path: 'prediccion', 
    component: PrediccionComponent},

    
  { path: '', redirectTo:'/home', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
