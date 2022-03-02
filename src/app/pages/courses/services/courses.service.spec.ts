import { Course } from './../model/course.model';
import { COURSES } from './../../../../testing/mock/db.data';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CoursesService } from './courses.service';

fdescribe('CoursesService', () => {
  let service: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all courses', () => {
    service.findAllCourses().subscribe((courses: Course[]) => {
      const course = courses.find((course) => course.id == 1);

      expect(course?.title).toBe('Angular Testing Course');
    });

    const req = httpTestingController.expectOne('/api/courses');

    expect(req.request.method).toEqual('GET');

    req.flush(Object.values(COURSES));
  });
});
