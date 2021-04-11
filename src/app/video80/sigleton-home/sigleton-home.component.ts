import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelos/personas';
import { ListaSigletonService } from '../servicios/lista-sigleton.service';
@Component({
  selector: 'app-sigleton-home',
  templateUrl: './sigleton-home.component.html',
  styleUrls: ['./sigleton-home.component.css'],
  providers:[ListaSigletonService]
})
export class SigletonHomeComponent implements OnInit {

  arrPersonas:Persona[];
  constructor(private personasService:ListaSigletonService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personasService.getAll();
  }

  onClick(){
    this.personasService.create(new Persona('nueva','persona',0,true));
  }

  async onActivas(){
    // then catch
    //this.personasService.activos().then((arrTempPersonas) =>  console.log(arrTempPersonas)).catch(error => console.log(error))
    //await
  
    try {
      this.arrPersonas = await this.personasService.activosVerion2();
    }catch (error){
      console.log(error);
    }
  }

}
