import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Code } from 'src/app/model/code';

@Component({
  templateUrl: './check-code.component.html',
  styleUrls: ['./check-code.component.scss']
})
export class CheckCodeComponent implements OnInit {
  generatedCodes : Code[] = [];
  constructor(private readonly apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getCodes().subscribe(result => {this.generatedCodes = result; console.log(result)});
  }

}
