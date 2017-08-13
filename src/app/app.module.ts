import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './app-root/app-header/app-header.component';
import { InicioComponent } from './app-root/inicio/inicio.component';
import { ProjectsComponent } from './app-root/projects/projects.component';
import { ContactoComponent } from './app-root/contacto/contacto.component';
import { NotfoundComponent } from './app-root/notfound/notfound.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InicioComponent,
    ProjectsComponent,
    ContactoComponent,
    NotfoundComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent},
      { path: 'home', component: InicioComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactoComponent},
      { path: '**', component: NotfoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
