import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   employee: object[];
  constructor() { }

  ngOnInit() {
    this.employee = [{Id: 1, Name: ' abhishek', Salary: 10000, Department: 'devops' },
      { Id: 2, Name: ' shubham', Salary: 20000, Department: 'java' },
      { Id: 3 , Name: ' harsh', Salary: 30000, Department: 'ml' },
      { Id: 4, Name : 'Harshil', Salary: 40000, Department : 'ai' }];
  }
}
