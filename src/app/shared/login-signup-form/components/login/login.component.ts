import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login(): void {
    this.http.get<User[]>('http://localhost:3000/signupUsers')
      .subscribe((res: User[]) => {
        const user: User | undefined = res.find((element: User) => {
          return element.email === this.loginForm.value.email && element.password === this.loginForm.value.password;
        });
        if (user) {
          alert('Login Success');
          localStorage.setItem('token', 'fake-token');
          this.loginForm.reset();
          this.router.navigate(['/products']);
        } else {
          alert('Error: User not found');
        }
      }, (err: any) => {
        alert('Error: Something was wrong');
      });
  }

}
