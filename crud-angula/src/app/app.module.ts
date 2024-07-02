import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogConfirmacaoComponent } from './components/dialog-confirmacao/dialog-confirmacao.component';
import { DialogService } from './service/dialog.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AlertaComponent } from './components/alerta/alerta.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListComponent,
    FormComponent,
    ProfileComponent,
    FooterComponent,
    DialogConfirmacaoComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
