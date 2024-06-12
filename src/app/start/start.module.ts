// start-module.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component'; // Import your component

@NgModule({
  declarations: [
    StartComponent, // Add your component to the declarations array
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
  ]
})
export class StartModuleModule { }
