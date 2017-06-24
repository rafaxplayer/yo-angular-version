import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <div class="container">
      <section class="notfound">
        <h2>404</h2>
        <p>Sorry, Page not Found</p>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
        <a href="/home">Click to home page</a>
      </section>
    </div>
  `,
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  

  constructor() {
    
   }

  ngOnInit() {
  }

}
