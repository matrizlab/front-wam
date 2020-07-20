import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ResultComponent } from './components//result/result.component';

import { WorkflowGuard } from './services/workflow-guard.service';
//import { WorkflowService } from './services/workflow/workflow.service';

export const appRoutes: Routes = [
  // Step 1
  { path: 'login', component: LoginComponent },
  // Step 2
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [WorkflowGuard],
  },
  // Step 3
  { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [WorkflowGuard],
})
export class AppRoutingModule {}
