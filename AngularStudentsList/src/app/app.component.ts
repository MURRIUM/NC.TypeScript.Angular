import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import { STUDENTS} from './mock-students';
import { Student} from './student';
import {DeletePopupComponent} from './delete-popup/delete-popup.component';
import {NewStudentComponent} from './new-student/new-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Students: Student[] = STUDENTS.slice();
  checkAvgMark = true;
  sorted: boolean[] = [false, false, false, false, false, false];
  selectedStudent: Student;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  openNewStudentDialog(): void {
    const dialogRef = this.dialog.open(NewStudentComponent, {data: {student: new Student()}});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = STUDENTS[STUDENTS.length - 1].id + 1;
        STUDENTS.push(result);
      }
      this.refreshData();
    });
  }

  openDeleteDialog(student: Student): void {
    if (student) {
      const dialogRef = this.dialog.open(DeletePopupComponent, {width: '300px', data: {student: student}});

      dialogRef.afterClosed().subscribe(() => {
        this.refreshData();
      });
    }
  }

  openEditDialog(student: Student): void {
    if (student) {
      const dialogRef = this.dialog.open(EditStudentComponent, {data: {student: student}});

      dialogRef.afterClosed().subscribe(() => {
        this.refreshData();
      });
    }
  }

  filterStudentsDate(date: Date): void {
    for (let i = this.Students.length - 1; i >= 0; i--) {
      if (this.Students[i].dateOfBirth <= date) {
        this.Students.splice(i, 1);
      }
    }
  }

  filterStudentsMark(mark: string): void {
    for (let i = this.Students.length - 1; i >= 0; i--) {
      if (this.Students[i].avgMark <= +mark) {
        this.Students.splice(i, 1);
      }
    }
  }

  refreshData(): void {
    this.Students = STUDENTS.slice();
    this.cdr.detectChanges();
  }

  sortData(column: string): void {
    if (column === 'id') {
      if (this.sorted[0]) {
        this.Students = this.Students.sort((n1, n2) => n1.id - n2.id);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.id - n1.id);
      }
      this.sorted[0] = !this.sorted[0];
    }
    if (column === 'surname') {
      if (this.sorted[1]) {
        this.Students = this.Students.sort((n1, n2) => n1.surname > n2.surname ? 1 : -1);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.surname > n1.surname ? 1 : -1);
      }
      this.sorted[1] = !this.sorted[1];
    }
    if (column === 'firstName') {
      if (this.sorted[2]) {
        this.Students = this.Students.sort((n1, n2) => n1.firstName > n2.firstName ? 1 : -1);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.firstName > n1.firstName ? 1 : -1);
      }
      this.sorted[2] = !this.sorted[2];
    }
    if (column === 'secondName') {
      if (this.sorted[3]) {
        this.Students = this.Students.sort((n1, n2) => n1.secondName > n2.secondName ? 1 : -1);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.secondName > n1.secondName ? 1 : -1);
      }
      this.sorted[3] = !this.sorted[3];
    }
    if (column === 'Date') {
      if (this.sorted[4]) {
        this.Students = this.Students.sort((n1, n2) => n1.dateOfBirth > n2.dateOfBirth ? 1 : -1);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.dateOfBirth > n1.dateOfBirth ? 1 : -1);
      }
      this.sorted[4] = !this.sorted[4];
    }
    if (column === 'avgMark') {
      if (this.sorted[5]) {
        this.Students = this.Students.sort((n1, n2) => n1.avgMark - n2.avgMark);
      } else {
        this.Students = this.Students.sort((n1, n2) => n2.avgMark - n1.avgMark);
      }
      this.sorted[5] = !this.sorted[5];
    }
  }
  update(): void {}
}
