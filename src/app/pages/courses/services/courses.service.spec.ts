import { Course } from './../model/course.model';
import { COURSES } from './../../../../testing/mock/db.data';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoursesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
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

  it('should find a course by id', () => {
    service.findCourseById(1).subscribe((course: Course) => {
      expect(course).toBeTruthy();
      expect(course.id).toBe(1);
    });

    const req = httpTestingController.expectOne('/api/courses/1');

    expect(req.request.method).toEqual('GET');

    req.flush(COURSES[0]);
  });

  it('should save the course data', () => {
    const changes: Partial<Course> = {
      description: 'Testing unit test',
    };

    service.saveCourse(1, changes).subscribe((course: Course) => {
      expect(course.id).toBe(1);
    });

    const req = httpTestingController.expectOne('/api/courses/1');

    expect(req.request.method).toEqual('PUT');
    expect(req.request.body.description).toEqual(changes.description);

    req.flush({
      ...COURSES[0],
      ...changes,
    });
  });
});
