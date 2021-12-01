import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './title/header/header.component';
import { AvatarComponent } from './title/avatar/avatar.component';
import { TitleMenuComponent } from './menu/title-menu/title-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeListComponent } from './menu/home-list/home-list.component';
import { QuestionnaireListComponent } from './menu/questionnaire-list/questionnaire-list.component';
import { Questionnaire2ListComponent } from './menu/questionnaire2-list/questionnaire2-list.component';
import { RegistrationListComponent } from './title/registration-list/registration-list.component';
import { AuthorizationListComponent } from './title/authorization-list/authorization-list.component';
import { AvatarListComponent } from './title/avatar-list/avatar-list.component';
import { BlogListComponent } from './menu/blog-list/blog-list.component';
import { SecretsListComponent } from './menu/secrets-list/secrets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { InfoComponent } from './menu/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    TitleMenuComponent,
    HomeListComponent,
    QuestionnaireListComponent,
    Questionnaire2ListComponent,
    RegistrationListComponent,
    AuthorizationListComponent,
    AvatarListComponent,
    BlogListComponent,
    SecretsListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
