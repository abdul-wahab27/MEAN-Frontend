import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component:LoginComponent,},
  {path: 'notes', component:NotesComponent, canActivate:[AuthGuard]},
  {path: 'signup', component:SignUpComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
