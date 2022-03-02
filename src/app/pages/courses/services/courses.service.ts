import { Course } from './../model/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  findCourseById(id: number): Observable<Course> {
    return this.http.get<Course>('/api/courses/' + id);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }
}
