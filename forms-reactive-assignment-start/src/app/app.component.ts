import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        [this.badProjectName]
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  badProjectName(control: FormControl) {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ badProjectName: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
