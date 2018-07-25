import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `
    <button (click)="onSave($event)">Save</button>
    `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onSave($event) {
        console.log('Button was clicked', $event);
     }

}
