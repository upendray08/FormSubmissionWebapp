import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Data } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table: Data[] = [];
  submitted = false;

  onAddData(form: NgForm) {
    this.submitted = true;
    if(form.invalid) return;
    this.table.push(form.value);
    console.log(form.value);
  }
  onResetData(form: NgForm) {
    this.submitted = false;
    form.resetForm();
  }
}
