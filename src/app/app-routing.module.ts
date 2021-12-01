import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { BlogListComponent } from "./menu/blog-list/blog-list.component";
import { HomeListComponent } from "./menu/home-list/home-list.component";
import { InfoComponent } from "./menu/info/info.component";
import { QuestionnaireListComponent } from "./menu/questionnaire-list/questionnaire-list.component";
import { Questionnaire2ListComponent } from "./menu/questionnaire2-list/questionnaire2-list.component";
import { SecretsListComponent } from "./menu/secrets-list/secrets-list.component";
import { AuthorizationListComponent } from "./title/authorization-list/authorization-list.component";
import { AvatarListComponent } from "./title/avatar-list/avatar-list.component";
import { RegistrationListComponent } from "./title/registration-list/registration-list.component";


const appRoutes:Routes = [
    {path: '', component: HomeListComponent},
    {path: 'questionnaire', component: QuestionnaireListComponent },
    {path: 'questionnaire2', component: Questionnaire2ListComponent },
    {path: 'registration', component: RegistrationListComponent  },
    {path: 'authorization', component: AuthorizationListComponent },
    {path: 'app-avatar-list', component: AvatarListComponent  },
    {path: 'blog-list', component: BlogListComponent },
    {path: 'secrets-list', component: SecretsListComponent },
    {path: 'info', component: InfoComponent },
  ];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}