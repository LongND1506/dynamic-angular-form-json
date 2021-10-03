import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JsonFormData } from '../components/json-form/json-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public formData: JsonFormData;
  validJsonResponse: JsonFormData;
  formatJsonError: string;

  constructor() {}

  ngOnInit() {}

  handleInputJson(event: any) {
    try {
      const json = JSON.parse(event.target.value);

      this.formatJsonError = '';
      this.validJsonResponse = json;
    } catch (error) {
      this.validJsonResponse = null;
      this.formatJsonError = 'invalid json';
    }
  }
}
