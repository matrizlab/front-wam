import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './services/formData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @Input() formData;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    console.log('Start WAM Application');
  }
}
