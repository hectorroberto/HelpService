import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  configs = {

    isSignIn: true,
    action: 'Login',
    actionChange: 'Criar conta'
  };


  private nameControl = new FormControl('',[Validators.required, Validators.minLength(3)]);



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get nome(): FormControl{
    return <FormControl>this.authForm.get('nome');
  }

  get email(): FormControl{
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl{
    return <FormControl>this.authForm.get('password');
  }





  changeAuthAction(){
    this.configs.isSignIn = !this.configs.isSignIn;
    const {isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Entrar' : 'Criar';
    this.configs.actionChange = isSignIn ? 'Criar conta' : 'Já possuo uma conta';
    !isSignIn 
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }




  onSubmit(){
    console.log('AuthForm: ', this.authForm.value);
  }


}