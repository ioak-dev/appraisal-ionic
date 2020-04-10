import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatChipsModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSnackBarModule,
  MatToolbarModule } from '@angular/material';

import { RouteReuseStrategy } from '@angular/router';

import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NotifyDialogComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  entryComponents: [
    NotifyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
