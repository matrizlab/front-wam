import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../../services/formData.service';
import { Payment } from '../../models/formData.model';

@Component({
  selector: 'step2-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  title = 'Pago del producto';
  PaymentData: Payment;
  form: any;

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    console.log('Paso 2 - Pago del producto');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.createPayment(this.PaymentData);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/login']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      this.router.navigate(['/result']);
    }
  }
}
