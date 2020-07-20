import { Injectable } from '@angular/core';

import { FormData, User, Payment } from '../models/formData.model';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { WorkflowService } from '../services/workflow.service';
import { STEPS } from '../models/workflow.model';

@Injectable()
export class FormDataService {
  private formData: FormData = new FormData();
  private isLoginFormValid: boolean = false;
  private isCheckoutFormValid: boolean = false;
  private url = 'http://www.mocky.io/v2/5e3d41272d00003f7ed95c09';

  constructor(
    private workflowService: WorkflowService,
    private http: HttpClient
  ) {}

  getUser(): User {
    // Step 1 - Return the User data
    var user: User = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
    };
    return user;
  }

  setUser(data: User) {
    // Step 1 - Update the User data only when the Form had been validated successfully
    this.isLoginFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
    // Validate step 1
    this.workflowService.validateStep(STEPS.login);
  }

  createPayment(data: Payment) {
    // Step 2 - Check the payment only when Form had been validated successfully
    this.isCheckoutFormValid = true;
    // Validate step 2
    this.workflowService.validateStep(STEPS.checkout);
    // http post call
    return this.http.post(`${this.url}`, data).pipe(
      map((resp: any) => {
        this.formData.title = resp.title;
      })
    );
  }

  getPayment() {
    // Step 2 -  Return the payment response
    return this.http.get(this.url);
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Reset the workflow
    this.workflowService.resetSteps();
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isLoginFormValid = this.isCheckoutFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isLoginFormValid && this.isCheckoutFormValid;
  }
}
