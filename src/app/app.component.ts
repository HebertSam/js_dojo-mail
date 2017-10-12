import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';
  header: Array<string> = ["Email", "Importance", "Subject", "Content"];
  emails = [{
    email: "bill@gates.com",
    importance: true,
    subject: "New Windows",
    content: "Windows XI will launch in year 2100"
  },
  {
    email: "bill@gates.com",
    importance: false,
    subject: "New Windows",
    content: "Windows XI will launch in year 2100"
  },
  {
    email: "bill@gates.com",
    importance: true,
    subject: "New Windows",
    content: "Windows XI will launch in year 2100"
  }]
}
