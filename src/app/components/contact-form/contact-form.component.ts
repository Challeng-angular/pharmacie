import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    message: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
