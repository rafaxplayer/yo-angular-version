import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <ul *ngFor="let route of routes; let i = index">
          <li><a [routerLink]="route.path" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:true}">{{route.name}}</a></li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent{

  public routes = [
    {path:'/',name:'Acerca de mi'},
    {path:'/projects',name:'Projectos'},
    {path:'/contact',name:'Contacto'}
  ]
  

}
