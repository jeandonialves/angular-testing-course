import { Course } from './model/course.model';
import { CoursesService } from './services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: Course[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.findAllCourses().subscribe((res) => {
      this.courses = res;
    });
  }
}
