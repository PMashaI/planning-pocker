import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game';
import { LoginComponent } from './pages/login/login';
 
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: 'game/:name', component: GameComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}