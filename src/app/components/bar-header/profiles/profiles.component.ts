import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styles: [],
})
export class ProfilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
