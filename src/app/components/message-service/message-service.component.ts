import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.scss']
})
export class MessageServiceComponent implements OnInit {
  showMessage = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.showMessage=false, 3000);
  }
}
