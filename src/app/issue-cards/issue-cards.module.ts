import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueFormComponent} from './issue-form/issue-form.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: IssueFormComponent,
    children: []
  }
];

@NgModule({
  declarations: [IssueFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class IssueCardsModule {
}
