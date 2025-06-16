import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent {
  // issue Solved by adding a minimal property to avoid empty class warning
  initialized = true;
}
