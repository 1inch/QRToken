import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RedeemFormComponent} from './redeem-form/redeem-form.component';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: RedeemFormComponent,
        children: []
    }
];

@NgModule({
    declarations: [RedeemFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule.forChild(
            routes
        )
    ]
})
export class RedeemModule {
}
