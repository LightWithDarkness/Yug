import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { studentRegistration } from './student';
import { StudentLoginComponent } from './student-login/student-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, StudentLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  student: studentRegistration = {
    email: 'student1@gmail.com',
    password: 'student1',
    firstName: 'Student',
    lastName: 'One',
    rollNo: 1,
    grade: 3,
    address: "Student 1's address",
    fathersName: "Student 1's father",
    mothersName: "Student 1's mother",
    phoneNumber: 1234567890,
    parentPhoneNumber: 9087654321,
  };
  title = 'Yug';
  @Input() loginInfo = 'Login';
  constructor(private studentService: StudentService) { }
  onActivate() {
    console.log('update login');
    this.loginInfo = this.studentService.studentDetail.firstName + " " + this.studentService.studentDetail.lastName;
  }
  // ngOnInit() {
    // this.studentRegister();
  // }
  // async studentRegister() {
  //   await this.studentService
  //     .studentRegistration(this.student)
  //     .subscribe((res) => {
  //       if (JSON.parse(JSON.stringify(res)).token) {
  //         console.log('Student registered');
  //       }
  //     });
  // }
}
