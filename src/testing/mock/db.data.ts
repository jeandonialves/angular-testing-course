import { Lesson } from 'src/app/pages/courses/model/lesson.model';
import { Course } from 'src/app/pages/courses/model/course.model';

import courses from 'mock/courses.json';
import lessons from 'mock/lessons.json';

export const COURSES = courses as Course[];

export const LESSONS = lessons as Lesson[];

export function findLessonsForCourse(courseId: number) {
  return LESSONS.filter((lesson) => lesson.courseId == courseId);
}
