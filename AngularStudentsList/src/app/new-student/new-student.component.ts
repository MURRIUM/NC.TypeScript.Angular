import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {

  newStudent = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      surname: ['', Validators.required]
    }),
    birthDate: ['', Validators.required],
    avgMark: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<NewStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close() {
    this.matDialogRef.close(this.data.student);
  }

  onSubmit() {
    this.data.student.firstName = this.newStudent.value.fullName.firstName;
    this.data.student.secondName = this.newStudent.value.fullName.secondName;
    this.data.student.surname = this.newStudent.value.fullName.surname;
    this.data.student.dateOfBirth = new Date(this.newStudent.value.birthDate);
    this.data.student.avgMark = +this.newStudent.value.avgMark;
  }
}
