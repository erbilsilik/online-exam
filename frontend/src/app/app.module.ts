import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule} from '@angular/material';

import * as Auth0 from 'auth0-web';
import { AppComponent } from './app.component';
import { ExamsApiService } from './exams/exams-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ExamsComponent } from './exams/exams.component';
import { ExamFormComponent } from './exams/exam-form.component';
import { CallbackComponent } from './callback.component';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'new-exam', component: ExamFormComponent },
  { path: '', component: ExamsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'balkansfood.eu.auth0.com',
      audience: 'https://online-exam.digituz.com.br',
      clientID: 'zlDA4krNGXknJqWNTGaxfJ4bK4fvfvYh',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
