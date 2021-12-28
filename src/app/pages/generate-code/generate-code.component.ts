import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Code } from 'src/app/model/code';

@Component({
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent {
  generatedCodes : Code[] = [];
  constructor(private readonly apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getCodes().subscribe(result => {this.generatedCodes = result; console.log(result)});
  }

  generateCode(): void {
    this.apiService.generateCode();
  }


}
