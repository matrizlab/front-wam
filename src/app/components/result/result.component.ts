import { Component, OnInit, Input } from '@angular/core';

import { FormData } from '../../models/formData.model';
import { FormDataService } from '../../services/formData.service';

@Component({
  selector: 'step3-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid: boolean = false;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formDataService.getPayment().subscribe((data: any) => {
      //console.log(data);
      this.formData.title = data.title;
      this.formData.text = data.text;
      this.formData.img = data.img;
    });
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Step 3 - Enhorabuena');
  }

  ngOnDestroy() {
    console.log('Exit Step 3');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }
}
