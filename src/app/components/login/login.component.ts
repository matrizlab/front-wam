import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/formData.model';
import { FormDataService } from '../../services/formData.service';

@Component({
  selector: 'step1-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  title = 'Mis Datos';
  user: User;
  form: any;

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.user = this.formDataService.getUser();
    console.log('Paso 1 - Mis Datos');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setUser(this.user);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/checkout']);
    }
  }
}
