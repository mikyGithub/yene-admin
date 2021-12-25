import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GenerateCodeComponent } from './pages/generate-code/generate-code.component';
import { CheckCodeComponent } from './pages/check-code/check-code.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MobileInterfaceDemoComponent } from './components/mobile-interface-demo/mobile-interface-demo.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateCodeComponent,
    CheckCodeComponent,
    SideBarComponent,
    MobileInterfaceDemoComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
