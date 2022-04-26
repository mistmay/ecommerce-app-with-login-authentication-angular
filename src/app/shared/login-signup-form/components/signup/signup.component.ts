import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")])]
    });
  }

  signUp(): void {
    this.http.post<User>('http://localhost:3000/signupUsers', this.signUpForm.value)
      .subscribe((res: any) => {
        alert('Sign up Done');
        this.signUpForm.reset();
        this.router.navigate(['/login']);
      }), (err: any) => {
        alert('Error: something was wrong');
      };
  }

}
