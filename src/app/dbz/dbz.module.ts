import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCaracterFormComponent } from './components/add-caracter-form/add-caracter-form.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  exports: [
    DbzComponent
  ],
  declarations: [
    DbzComponent,
    ListComponent,
    AddCaracterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
