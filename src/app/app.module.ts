import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BoardsComponent } from './pages/boards/boards.component';
import { UsersComponent } from './pages/users/users.component';
import { BoardBarComponent } from './pages/boards/board-bar/board-bar.component';
import { BoardContentComponent } from './pages/boards/board-content/board-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarHeaderComponent } from './components/bar-header/bar-header.component';
import { AuthComponent } from './pages/auth/auth.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
