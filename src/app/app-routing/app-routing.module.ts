import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from '../student-list-component/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
