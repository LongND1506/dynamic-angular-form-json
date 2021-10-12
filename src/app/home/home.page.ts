import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as ace from 'ace-builds';
import { JsonFormData } from '../components/json-form/json-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('editor') private editor: ElementRef<HTMLElement>;
  readonly dummy = {
    controls: [
      {
        name: 'firstName',
        label: 'First name',
        value: '',
        type: 'text',
        validators: {
          required: true,
          minLength: 10,
        },
      },
      {
        name: 'lastName',
        label: 'Last name',
        value: '',
        type: 'text',
        validators: {},
      },
      {
        name: 'comments',
        label: 'Comments',
        value: '',
        type: 'textarea',
        validators: {},
      },
      {
        name: 'agreeTerms',
        label: 'Do you agree?',
        value: 'false',
        type: 'checkbox',
        validators: {},
      },
      {
        name: 'lightDark',
        label: 'Toggle dark mode',
        value: 'false',
        type: 'toggle',
        validators: {},
      },
      {
        name: 'size',
        label: 'Size',
        value: '',
        type: 'range',
        options: {
          min: '0',
          max: '100',
          step: '1',
          icon: 'sunny',
        },
        validators: {},
      },
    ],
  };

  public formData: JsonFormData;
  validJsonResponse: JsonFormData;
  formatJsonError: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );

    ace.config.set('fontSize', '14px');
    const aceEditor = ace.edit(this.editor.nativeElement);

    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/json');

    aceEditor.on('change', () => {
      this.handleInputJson(aceEditor.getValue());
    });

    aceEditor.session.setValue(JSON.stringify(this.dummy, null, 2));
  }

  handleInputJson(value: string): void {
    try {
      const json = JSON.parse(value);

      this.formatJsonError = '';
      this.validJsonResponse = json;
    } catch (error) {
      this.validJsonResponse = null;
      this.formatJsonError = 'invalid json';
    }
  }
}
