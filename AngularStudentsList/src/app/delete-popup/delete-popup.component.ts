import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {STUDENTS} from '../mock-students';
import {Student} from '../student';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DeletePopupComponent implements OnInit {
  constructor(private matDialogRef: MatDialogRef<DeletePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  deleteStudent(student: Student): void {
    for (let i = 0; i < STUDENTS.length; i++) {
      if (STUDENTS[i] === student) {
        STUDENTS.splice(i, 1);
      }
    }
  }

  public close() {
    this.matDialogRef.close();
  }

}
