import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
    <h2>{{"Title: "+title}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
