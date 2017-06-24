import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
declare var $:any;
declare var Email:any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{
  
  email_regex:string="[^ @]*@[^ @]*";
  
  onSubmit(f: NgForm) {
    if(f.valid){
      
        Email.send(f.value.email,
                    "rafaxplayer72@gmail.com",
                    "From: "+ f.value.name + " Email : " + f.value.email,
                    f.value.message,
                    "smtp.gmail.com",
                    "exhowi72@gmail.com",
                    "uuo03mskGHOd");
        alert('Ok Correo enviado');
        this.reset();
    }
  }

  

  reset(){
    $('#contacto')[0].reset();
  }

}
