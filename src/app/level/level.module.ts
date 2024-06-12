
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LevelRoutingModule } from './level-routing.module';
import { LevelComponent } from './level.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [LevelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelRoutingModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class LevelModule { }
