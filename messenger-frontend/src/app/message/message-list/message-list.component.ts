import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-message-list',
  imports: [NgFor],
  styleUrls: ['./message-list.component.css'],
  template: `
  <h2 class="title">Message List:</h2>
  
  <div class="list">
    <div class="message" *ngFor="let msg of messages">
      <span class="sender">{{ msg.sender }}</span> 
      <span class="content">{{ msg.content }}</span> 
    </div>
  </div>
  `
})

export class MessageListComponent {
  messages = [
    { sender: 'Alice', content: 'Hello from Angular!' },
    { sender: 'Bob', content: 'Can’t wait to connect to a backend!' },
    { sender: 'Cici', content: 'Handing in homework 10 with Angular!' },
    { sender: 'MaxMustermann', content: 'Please upload it on Moodle!' }
    ];
}
