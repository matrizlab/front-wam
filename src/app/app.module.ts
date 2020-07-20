import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent } from './app.component';

/* Shared Components */
import { ProgressbarComponent } from './components/shared/progressbar/progressbar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

/* Steps Components */
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ResultComponent } from './components/result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './services/formData.service';
import { WorkflowService } from './services/workflow.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },
  ],
  declarations: [
    AppComponent,
    ProgressbarComponent,
    LoginComponent,
    CheckoutComponent,
    ResultComponent,
    NavbarComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
