import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './auth/login/login.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { ConversationComponent } from './message/conversation/conversation.component';

export const routes: Routes = [
    { path: '', component: IntroComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'messages', component: MessageListComponent }, 
    { path: 'conversation', component: ConversationComponent }, 
];
