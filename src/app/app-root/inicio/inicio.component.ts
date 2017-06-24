import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#slides').slidesjs({
      play: {active: false,effect: "fade",interval: 5000,auto: true,swap: true,pauseOnHover: false,restartDelay: 2500},
      navigation: { active: false,effect: "slide"},
      pagination: {active: false,effect: "slide"}
         
    });
  }

}
