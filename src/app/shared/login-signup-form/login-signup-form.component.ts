import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-signup-form',
  templateUrl: './login-signup-form.component.html',
  styleUrls: ['./login-signup-form.component.scss']
})
export class LoginSignupFormComponent implements OnInit {
  @Input() formType!: 'signup' | 'login';

  constructor() { }

  ngOnInit(): void {
  }

}
