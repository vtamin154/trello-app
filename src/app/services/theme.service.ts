import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.setTheme(this.currentTheme);
    }
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    const body = document.getElementsByTagName('body')[0];
    if (theme === 'dark') {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  getTheme() {
    return this.currentTheme;
  }
}
