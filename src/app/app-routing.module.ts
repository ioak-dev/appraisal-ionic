import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HelpComponent} from './help/help.component';
import {ProvideFeedbackComponent} from './provide-feedback/provide-feedback.component';
import {ReviewResponseComponent} from './review-response/review-response.component';
import {ViewResponseComponent} from './view-response/view-response.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {SelfAppraisalComponent} from './self-appraisal/self-appraisal.component';
import {ManageAppraisalComponent} from './manage-appraisal/manage-appraisal.component';
import {GoalDefinitionComponent} from './goal-definition/goal-definition.component';
import {AuthGuard} from './auth.guard';
import { RatingScaleComponent } from './rating-scale/rating-scale.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomeModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  { path: 'self-appraisal', loadChildren: () => import('./self-appraisal/self-appraisal.module').then( m => m.SelfAppraisalModule), canActivate: [AuthGuard]},
  { path: 'goal-definition', loadChildren: () => import('./goal-definition/goal-definition.module').then( m => m.GoalDefinitionModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
