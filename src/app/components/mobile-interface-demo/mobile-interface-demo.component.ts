import { Component, Input } from '@angular/core';
import { AppSetting } from 'src/app/model/app-setting';

@Component({
  selector: 'app-mobile-interface-demo',
  templateUrl: './mobile-interface-demo.component.html',
  styleUrls: ['./mobile-interface-demo.component.scss'],
})
export class MobileInterfaceDemoComponent {
  @Input() appSetting: AppSetting = {};
}
