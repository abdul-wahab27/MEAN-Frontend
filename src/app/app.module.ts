import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './Services/auth-interceptor.service';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
      ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function(injector: Injector) {
          return new AuthInterceptor(injector);
      },
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
