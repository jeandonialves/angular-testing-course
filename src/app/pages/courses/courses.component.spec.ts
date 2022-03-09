import { HttpClientTestingModule } from '@angular/common/http/testing';
import { COURSES } from 'src/testing/mock/db.data';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {
    component.courses = COURSES;

    fixture.detectChanges();
    const cards = el.queryAll(By.css('.course-card'));

    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(3, 'Unexpected number of courses');
  });

  it('should display the first course', () => {
    component.courses = COURSES;

    fixture.detectChanges();

    const course = component.courses[0];

    const card = el.query(By.css('.course-card:first-child')),
      title = card.query(By.css('.title')),
      description = card.query(By.css('.description'));

    expect(card).toBeTruthy('Could not find course card');

    expect(title.nativeElement.textContent).toBe(course.title);

    expect(description.nativeElement.textContent).toBe(course.description);
  });
});
