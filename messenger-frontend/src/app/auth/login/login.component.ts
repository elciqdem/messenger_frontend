import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Weil laut Folien: Two-Way Binding: [(ngModel)]="property" (requires FormsModule )
import { RouterLink } from '@angular/router'; //wegen button back to Homepage

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = ''; 
  password = ''; 

  submit(): void {
    alert(`Angemeldet als ${this.username}`);
  }
}
