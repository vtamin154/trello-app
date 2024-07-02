import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styles: [],
})
export class ThemesComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
  currentTheme = this.themeService.getTheme().toUpperCase();
  ngOnInit(): void {}

  toggleTheme() {
    const newTheme =
      this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
    this.currentTheme = newTheme.toUpperCase();
  }
}
