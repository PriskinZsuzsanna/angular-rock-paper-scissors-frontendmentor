import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RulesComponent } from './components/rules/rules.component';
import { PickComponent } from './components/pick/pick.component';
import { ResultsComponent } from './components/results/results.component';
import { HeaderComponent } from './components/header/header.component';
import { RulesBtnComponent } from './components/rules-btn/rules-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    PickComponent,
    ResultsComponent,
    HeaderComponent,
    RulesBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
