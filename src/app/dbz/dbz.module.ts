import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';

@NgModule({
  exports: [
    DbzComponent
  ],
  declarations: [
    DbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
