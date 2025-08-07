import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
    this.http.post('http://localhost:3000/send-email', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'ფორმა წარმატებით გაიგზავნა!';
        this.errorMessage = '';
        this.contactForm.reset();

        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      error: () => {
        this.errorMessage = 'გაგზავნა ვერ მოხერხდა. გთხოვ სცადე თავიდან.';
        this.successMessage = '';

        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    });
  } else {
    this.successMessage = '';
    this.errorMessage = 'შეავსე ყველა საჭირო ველი.';
    this.contactForm.markAllAsTouched();

    setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }
}
  resetForm() {
    this.contactForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }
}