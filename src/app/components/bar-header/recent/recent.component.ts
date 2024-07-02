import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styles: [],
})
export class RecentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
