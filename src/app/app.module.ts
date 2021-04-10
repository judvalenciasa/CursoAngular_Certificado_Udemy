import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecoradorrOutputComponent } from './video37/decoradorr-output/decoradorr-output.component';
import { DecoradorrOutputhijoComponent } from './video37/decoradorr-outputhijo/decoradorr-outputhijo.component';
import { CronometroPadreComponent } from './video38/cronometro-padre/cronometro-padre.component';
import { CronometroHijoComponent } from './video38/cronometro-hijo/cronometro-hijo.component';
import { InterpolacionvariablesComponent } from './video20/interpolacionvariables/interpolacionvariables.component';
import { SumarComponent } from './video24/sumar/sumar.component';
import { CronometroComponent } from './video26/cronometro/cronometro.component';
import { EventCaptacionDatosComponent } from './video28/event-captacion-datos/event-captacion-datos.component';
import { EventmouseComponent } from './video28/eventmouse/eventmouse.component';
import { CalculadoraComponent } from './video31/calculadora/calculadora.component';
import { DecoradorinputComponent } from './video33/decoradorinput/decoradorinput.component';
import { DecoradorinputpadreComponent } from './video33/decoradorinputpadre/decoradorinputpadre.component';

import { FormsModule } from '@angular/forms';
import { EnlaceObjetosComponent } from './video41/enlace-objetos/enlace-objetos.component';
import { EnlaceObjetospadreComponent } from './video41/enlace-objetospadre/enlace-objetospadre.component';
import { ListadetareasComponent } from './video42/listadetareas/listadetareas.component';
import { ListadetareasPadreComponent } from './video42/listadetareas-padre/listadetareas-padre.component';
import { Listadetareas2Component } from './video42/listadetareas2/listadetareas2.component';
import { FormularioComponent } from './video43/components/formulario/formulario.component';
import { ListaComponent } from './video43/components/lista/lista.component';
import { PapaComponent } from './video43/components/papa/papa.component';
import { PadreComponent } from './video45/padre/padre.component';
import { Hijo1Component } from './video45/hijo1/hijo1.component';
import { PadreDirectivaComponent } from './video48/padre-directiva/padre-directiva.component';
import { SemaforoComponent } from './video48/semaforo/semaforo.component';
import { NgtemplateComponent } from './video53/ngtemplate/ngtemplate.component';
import { NgtemplateforComponent } from './video55/ngtemplatefor/ngtemplatefor.component';
import { SwichComponent } from './video57/swich/swich.component';
import { ToDoComponent } from './video58/to-do/to-do.component';
import { ListaToDoComponent } from './video58/lista-to-do/lista-to-do.component';
import { FormularioToDOComponent } from './video58/formulario-to-do/formulario-to-do.component';
import { CajaRegistradoraComponent } from './video61/caja-registradora/caja-registradora.component';
import { ListaProductosComponent } from './video61/lista-productos/lista-productos.component';
import { ComandosComponent } from './video61/comandos/comandos.component';
import { ComprasPaPaComponent } from './video68/compras-pa-pa/compras-pa-pa.component';
import { FormularioComprasComponent } from './video68/formulario-compras/formulario-compras.component';
import { ListaProductosComprasComponent } from './video68/lista-productos-compras/lista-productos-compras.component';
import { RoutingPadreComponent } from './video69/routing-padre/routing-padre.component';
import { InfoComponent } from './video69/info/info.component';
import { AboutComponent } from './video69/about/about.component';
import { PapaRutasComponent } from './video73/papa-rutas/papa-rutas.component';
import { AcercaRutaComponent } from './video73/acerca-ruta/acerca-ruta.component';
import { ContactanosRutasComponent } from './video73/contactanos-rutas/contactanos-rutas.component';
import { PapaRutaDinamicaComponent } from './video75/papa-ruta-dinamica/papa-ruta-dinamica.component';
import { ContactanosRutaDinamicaComponent } from './video75/contactanos-ruta-dinamica/contactanos-ruta-dinamica.component';
import { AcercaRutaDinamicaComponent } from './video75/acerca-ruta-dinamica/acerca-ruta-dinamica.component';
import { DetalleEmpleadoComponent } from './video75/detalle-empleado/detalle-empleado.component';
import { ProyectosComponent } from './video75/empleados/proyectos/proyectos.component';
import { CurriculumComponent } from './video75/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './video75/empleados/experiencia/experiencia.component';
import { GuardianPadreComponent } from './video77/guardian-padre/guardian-padre.component';
import { GuardianHijoComponent } from './video77/guardian-hijo/guardian-hijo.component';
import { GuardianHomeComponent } from './video77/guardian-home/guardian-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoradorrOutputComponent,
    DecoradorrOutputhijoComponent,
    CronometroPadreComponent,
    CronometroHijoComponent,
    InterpolacionvariablesComponent,
    SumarComponent,
    CronometroComponent,
    EventCaptacionDatosComponent,
    EventmouseComponent,
    CalculadoraComponent,
    DecoradorinputComponent,
    DecoradorinputpadreComponent,
    EnlaceObjetosComponent,
    EnlaceObjetospadreComponent,
    ListadetareasComponent,
    ListadetareasPadreComponent,
    Listadetareas2Component,
    FormularioComponent,
    ListaComponent,
    PapaComponent,
    PadreComponent,
    Hijo1Component,
    PadreDirectivaComponent,
    SemaforoComponent,
    NgtemplateComponent,
    NgtemplateforComponent,
    SwichComponent,
    ToDoComponent,
    ListaToDoComponent,
    FormularioToDOComponent,
    CajaRegistradoraComponent,
    ListaProductosComponent,
    ComandosComponent,
    ComprasPaPaComponent,
    FormularioComprasComponent,
    ListaProductosComprasComponent,
    RoutingPadreComponent,
    InfoComponent,
    AboutComponent,
    PapaRutasComponent,
    AcercaRutaComponent,
    ContactanosRutasComponent,
    PapaRutaDinamicaComponent,
    ContactanosRutaDinamicaComponent,
    AcercaRutaDinamicaComponent,
    DetalleEmpleadoComponent,
    ProyectosComponent,
    CurriculumComponent,
    ExperienciaComponent,
    GuardianPadreComponent,
    GuardianHijoComponent,
    GuardianHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
