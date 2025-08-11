import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage: string = ''; // <- Add this

  onSubmit(form: any) {
    if (form.valid) {
      fetch(environment.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formData),
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json().catch(() => ({})); // თუ პასუხი არ არის JSON
      })
      .then(() => {
        this.successMessage = 'Successfully sent!';
        form.resetForm();
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      })
      .catch(() => {
        this.successMessage = 'Failed to send.';
      });
    }
  }
  
}



