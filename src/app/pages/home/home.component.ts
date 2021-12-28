import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { AppSetting } from 'src/app/model/app-setting';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  appSetting: AppSetting = {};
  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getApplicationSetting().subscribe((val) => {
      this.appSetting = val;
      this.isLoading = false;
    });
  }
}
