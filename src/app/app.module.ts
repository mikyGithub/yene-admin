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
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
