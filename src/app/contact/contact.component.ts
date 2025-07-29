import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
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
        console.log('Form Submitted!', this.formData);
        form.reset();
      }
    }
}
