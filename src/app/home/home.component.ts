import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  contactForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],   // დავამატე name
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,15}$/)]],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]  // დავამატე message
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
    const formData = this.contactForm.value;

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Email გაგზავნა ვერ მოხერხდა.');
      }
      return response.json();
    })
    .then(data => {
      console.log('სერვერზე პასუხი:', data);
      this.successMessage = 'დამატებულია წარმატებით!';
      this.contactForm.reset();
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    })
    .catch(error => {
      console.error('Email გაგზავნის შეცდომა:', error);
      this.successMessage = 'ვერ მოხერხდა გაგზავნა.';
    });
  } else {
    this.contactForm.markAllAsTouched();
  }
}

}