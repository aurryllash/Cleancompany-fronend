import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,15}$/)]],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get phone() {
    return this.contactForm.get('phone')!;
  }
  get service() {
    return this.contactForm.get('service')!;
  }
  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {

      console.log('ფორმის მონაცემები:', this.contactForm.value);
      this.successMessage = 'Form was submitted successfully.';
      this.errorMessage = '';
      this.contactForm.reset();

      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    } else {

      this.successMessage = '';
      this.errorMessage = 'Form submission failed. Please check required fields.';
      this.contactForm.markAllAsTouched();

      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    }
  }
}