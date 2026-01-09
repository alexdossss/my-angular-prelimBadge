import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
  formData: FormData = {
    name: '',
    email: '',
    role: 'Attendee'
  };

  isSubmitted = false;

  roles = ['Attendee', 'Speaker', 'Sponsor'];

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.role) {
      this.isSubmitted = true;
      setTimeout(() => {
        this.resetForm();
        this.isSubmitted = false;
      }, 3000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      role: 'Attendee'
    };
  }
}
