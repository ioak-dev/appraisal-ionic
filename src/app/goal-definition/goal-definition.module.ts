import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GoalDefinitionComponent } from './goal-definition.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: GoalDefinitionComponent
      }
    ])
  ],
  declarations: [GoalDefinitionComponent]
})
export class GoalDefinitionModule {}
