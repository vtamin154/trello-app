import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-bar',
  templateUrl: './board-bar.component.html',
  styleUrls: ['./board-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BoardBarComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: any = [];
  //create ripple effect for button
  createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;

    const circle = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.users = user;
    });
  }
}
