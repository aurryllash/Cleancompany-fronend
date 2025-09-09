import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  jobForm: FormGroup;
  cvFile: File | null = null;
  otherFile: File | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.jobForm = this.fb.group({
      license: ['', Validators.required],
      delivery: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (!file) return;

    if (field === 'cv') this.cvFile = file;
    if (field === 'other') this.otherFile = file;
  }

  onSubmit() {
    if (!this.jobForm.valid) {
      this.errorMessage = 'Please fill in all required fields.';
      this.successMessage = '';
      this.jobForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    // Append all fields
    Object.keys(this.jobForm.value).forEach(key => {
      formData.append(key, this.jobForm.value[key]);
    });

    // Append files
    if (this.cvFile) formData.append('cv', this.cvFile);
    if (this.otherFile) formData.append('other', this.otherFile);

    this.http.post(`${environment.apiUrl}`, formData).subscribe({
      next: () => {
        this.successMessage = 'Form submitted successfully!';
        this.errorMessage = '';
        this.jobForm.reset();
        this.cvFile = null;
        this.otherFile = null;

        setTimeout(() => this.successMessage = '', 5000);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = `Failed to send form. Status: ${err.status}`;
        this.successMessage = '';

        setTimeout(() => this.errorMessage = '', 5000);
      }
    });
  }
}
