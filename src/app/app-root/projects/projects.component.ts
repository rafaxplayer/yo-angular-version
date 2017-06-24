import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  toggleSpoiler(ctx){
    $(ctx.currentTarget).toggleClass('fa-angle-up fa-angle-down');
    $(ctx.currentTarget).next().slideToggle();

  }

}
