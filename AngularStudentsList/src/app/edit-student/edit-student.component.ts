import {Component, Inject,} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  updateStudent = this.fb.group({
    fullName: this.fb.group({
      firstName: [this.data.student.firstName, Validators.required],
      secondName: [this.data.student.secondName, Validators.required],
      surname: [this.data.student.surname, Validators.required]
    }),
    birthDate: [this.data.student.dateOfBirth, Validators.required],
    avgMark: [this.data.student.avgMark, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this.matDialogRef.close(this.data.student);
  }

  onSubmit() {
    this.data.student.firstName = this.updateStudent.value.fullName.firstName;
    this.data.student.secondName = this.updateStudent.value.fullName.secondName;
    this.data.student.surname = this.updateStudent.value.fullName.surname;
    this.data.student.dateOfBirth = new Date(this.updateStudent.value.birthDate);
    this.data.student.avgMark = +this.updateStudent.value.avgMark;
  }
}
