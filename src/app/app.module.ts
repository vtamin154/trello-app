import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { UsersComponent } from './pages/users/users.component';
import { BoardBarComponent } from './pages/boards/board-bar/board-bar.component';
import { BoardContentComponent } from './pages/boards/board-content/board-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarHeaderComponent } from './components/bar-header/bar-header.component';
import { AuthComponent } from './pages/auth/auth.component';
import { WorkSpacesComponent } from './components/bar-header/work-spaces/work-spaces.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentComponent } from './components/bar-header/recent/recent.component';
import { ProfilesComponent } from './components/bar-header/profiles/profiles.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemesComponent } from '../themes/themes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    UsersComponent,
    BoardBarComponent,
    BoardContentComponent,
    FooterComponent,
    BarHeaderComponent,
    AuthComponent,
    WorkSpacesComponent,
    RecentComponent,
    ProfilesComponent,
    ThemesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
