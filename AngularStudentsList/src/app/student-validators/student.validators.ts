import {FormControl, FormGroup} from '@angular/forms';

export class StudentValidators {

  static dateValidation(control: FormControl) {
    const date = control.value;
    const nowDate: Date = new Date((new Date().getFullYear() - 10), (new Date().getMonth()), (new Date().getDate()));
    const dateOfBirth = new Date(date);
    return (dateOfBirth >= nowDate) ? {value: control.value} : null;
  }

  static nameValidation(control: FormGroup) {
    const name = control.get('firstName');
    const secondName = control.get('secondName');
    const surname = control.get('surname');
    const validName = ((name.value !== secondName.value && name.value !== surname.value && secondName.value !== surname.value));
    return !validName ? {value: control.value} : null;
  }
}
