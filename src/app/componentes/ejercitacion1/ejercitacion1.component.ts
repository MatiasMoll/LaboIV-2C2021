import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercitacion1',
  templateUrl: './ejercitacion1.component.html',
  styleUrls: ['./ejercitacion1.component.css']
})
export class Ejercitacion1Component implements OnInit {


  title = 'ejercitaciones2021';
  ngOnInit(){}

  numeroUno:number;
  numeroDos:number;
  promedio;

  calcular(){
    this.promedio = (this.numeroUno + this.numeroDos) / 2;
  }

  limpiarInput(){
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.promedio = '';
  }
  
  saludo(){
    console.log('hola 4º b');
  }
}
