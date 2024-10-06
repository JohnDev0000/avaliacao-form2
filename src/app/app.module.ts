import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TecladoComponent } from './teclado/teclado.component';
import { FormsModule } from '@angular/forms';
import { InformacoesModule } from './informacoes/informacoes.module';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    InformacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
