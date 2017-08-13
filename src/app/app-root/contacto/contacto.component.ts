import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $:any;
declare var Email:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

  onSubmit(f: NgForm):void{
    if(f.valid){
      Email.send(f.value.email,
                  "rafaxplayer72@gmail.com",
                  "From: "+ f.value.name + " Email : " + f.value.email,
                  f.value.message,
                  "smtp.gmail.com",
                  "exhowi72@gmail.com",
                  "uuo03mskGHOd");
          
      alert("Mensaje enviado");
      this.reset(f);
    }
  }

 reset(contactForm:NgForm):void{
    contactForm.reset();
  }

}
