import { Course } from './../../../pages/courses/model/course.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent {
  @Input()
  course!: Course;
}
