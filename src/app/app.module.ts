import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game';
import { LoginComponent } from './pages/login/login';
import { RoutingModule } from './routing.module';
import { StartPageComponent } from './pages/startPage/start';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
