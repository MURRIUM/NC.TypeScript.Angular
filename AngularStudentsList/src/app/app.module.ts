import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DesignateStudentDirective } from './designate-student.directive';
import { TranslationInFiftyPipe } from './translation-in-fifty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeletePopupComponent,
    NewStudentComponent,
    EditStudentComponent,
    DesignateStudentDirective,
    TranslationInFiftyPipe
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DeletePopupComponent,
    NewStudentComponent,
    EditStudentComponent
  ]
})
export class AppModule { }
