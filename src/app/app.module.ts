import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent as ItemLayoutComponent } from './item/layout.component';

import { MenuComponent as ItemMenuComponent } from './item/menu/menu.component';
import { Sub1Component as ItemSub1Component } from "./item/sub1/sub1.component";

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    DashboardComponent,
    ItemLayoutComponent,

    ItemMenuComponent,
    ItemSub1Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ClarityModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
