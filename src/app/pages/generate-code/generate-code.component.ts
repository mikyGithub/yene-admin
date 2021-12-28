import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent {
  generatedCodes: String[] = [];

  constructor(private readonly apiService:ApiService) {
  }

  generateCode(event: any): void {
    this.generatedCodes = [];
    const totalRequiredCodes: number = event.target.value;
    while (this.generatedCodes.length < totalRequiredCodes) {
      var singleCode = '';
      var alphabet = 'abcdefghijklmnopqrstuvwxyz';

      while (singleCode.length < 6) {
        singleCode += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      this.generatedCodes.push(singleCode);
    }
  }

  submitCode():void{
    this.apiService.generateCode(this.generatedCodes);
  }


}
