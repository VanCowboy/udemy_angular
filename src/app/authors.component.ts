
import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'app-authors',
    template: `
    <h2>{{"Author: "+title}}</h2>
    <ul>
    <li *ngFor="let author of authors">
    {{author}}
    </li>
    </ul>`
})

export class AuthorsComponent {
    title = 'Authors';
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
    }

}

