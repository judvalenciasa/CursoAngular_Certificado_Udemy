import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamdomGuard } from './guardianes/ramdom.guard';
import { AboutComponent } from './video69/about/about.component';
import { InfoComponent } from './video69/info/info.component';
import { AcercaRutaComponent } from './video73/acerca-ruta/acerca-ruta.component';
import { ContactanosRutasComponent } from './video73/contactanos-rutas/contactanos-rutas.component';
import { AcercaRutaDinamicaComponent } from './video75/acerca-ruta-dinamica/acerca-ruta-dinamica.component';
import { ContactanosRutaDinamicaComponent } from './video75/contactanos-ruta-dinamica/contactanos-ruta-dinamica.component';
import { DetalleEmpleadoComponent } from './video75/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './video75/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './video75/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './video75/empleados/proyectos/proyectos.component';
import { GuardianHijoComponent } from './video77/guardian-hijo/guardian-hijo.component';
import { GuardianPadreComponent } from './video77/guardian-padre/guardian-padre.component';


const routes: Routes = [
  //Esta primer ruta es para que aparezca en la primer pagina
  {
    path:'',
    pathMatch:'full',
    redirectTo:''
  },
  {
    path:'informacion', 
    component: InfoComponent,
  },
  {
    path:'acerca',
    component: AboutComponent,
  },
  {
    path:'informacion1', 
    component: ContactanosRutasComponent,
  },
  {
    path:'acerca1',
    component: AcercaRutaComponent,
  },
  {
    path:'about',
    redirectTo: 'acerca',
  },
  {
    path:'acerca2',
    component:AcercaRutaDinamicaComponent
  },
  {
    path:'informacion2',
    component:ContactanosRutaDinamicaComponent
  },
  {
    path:'empleados',
    component:DetalleEmpleadoComponent,
    children:[
      {
        path:'proyectos',
        component:ProyectosComponent
      },
      {
        path:'curriculum',
        component:CurriculumComponent
      },
      {
        path:'experiencia',
        component:ExperienciaComponent
      },
    ]
  },
  {
    path:'guardianPadre',
    component:GuardianPadreComponent,
    children:[
      {
        path:'guardianHijo',
        component:GuardianHijoComponent,
        canActivate:[RamdomGuard]
      }
    ]
  },

  //esta ruta es por si llega por url cualquier otra cosa a las rutas anteriores
  {
    path:'**',
    redirectTo:''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
