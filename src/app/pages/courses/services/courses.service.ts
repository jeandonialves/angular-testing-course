import { Course } from './../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }
}
