import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/">Acerca de mi</a></li>
          <li><a routerLink="/projects">Proyectos</a></li>
          <li><a routerLink="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent{
  
  constructor() { 

  }

}
