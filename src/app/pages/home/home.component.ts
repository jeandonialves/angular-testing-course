import { Course } from './../courses/model/course.model';
import { Observable, map } from 'rxjs';
import { CoursesService } from './../courses/services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beginnerCourses$!: Observable<Course[]>;
  advancedCourses$!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.coursesService.findAllCourses();

    this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
    this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');
  }

  filterByCategory(courses$: Observable<Course[]>, category: string) {
    return courses$.pipe(
      map((courses) => courses.filter((course) => course.category === category))
    );
  }
}
