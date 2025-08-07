import { Component } from '@angular/core';


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

  onSubmit(form: any) {
    if (form.valid) {
      fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formData),
      })
      .then(res => res.json())
      .then(() => {
        alert('გაგზავნილია წარმატებით!');
        form.resetForm();
      })
      .catch(() => {
        alert('შეცდომა გაგზავნისას.');
      });
    }
  }
}
