import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
	coursesActive: string = "active";
	studentsActive: string = "";
	sessionsActive: string = "";

	coursesClicked() {
		this.coursesActive = "active";
		this.studentsActive = "";
		this.sessionsActive = "";
	}

	studentsClicked() {
		this.coursesActive = "";
		this.studentsActive = "active";
		this.sessionsActive = "";
	}

	sessionsClicked() {
		this.coursesActive = "";
		this.studentsActive = "";
		this.sessionsActive = "active";
	}
}
