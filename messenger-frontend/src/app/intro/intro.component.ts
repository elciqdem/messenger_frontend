import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'; //binden das Intro Component an Routerlink

@Component({
  selector: 'app-intro',
  imports: [RouterLink],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  constructor() {
    // IntroComponent initialized
  }
}
