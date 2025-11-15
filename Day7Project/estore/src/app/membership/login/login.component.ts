import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export class Credential  {
  constructor(public  email:string,public  password:string){  }
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  isValidUser:boolean=false;
  isInvalidUser: boolean = false; 
  user: Credential=new Credential("kajal.ghule@selfemployee.in","grow");
 
  //Constructor 
  constructor(private svc:AuthService) {    }  //DI

  onSubmit(form: any): void {
   this.isValidUser=this.svc.validate(form.userEmail,form.userPassword);
   if(this.isValidUser){ 
    // this.isInvalidUser = false; 
    console.log("Valid User !"); }
   else{ 
    this.isInvalidUser = true;  
    console.log("Invalid User !"); }   
  }

}
