import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-spaces',
  templateUrl: './work-spaces.component.html',
  styleUrls: [],
})
export class WorkSpacesComponent implements OnInit {
  constructor() {}
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {}
}
