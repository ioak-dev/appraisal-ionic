import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SelfAppraisalComponent } from './self-appraisal.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: SelfAppraisalComponent
      }
    ])
  ],
  declarations: [SelfAppraisalComponent]
})
export class SelfAppraisalModule {}
