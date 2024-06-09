import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBarComponent } from './board-bar.component';

describe('BoardBarComponent', () => {
  let component: BoardBarComponent;
  let fixture: ComponentFixture<BoardBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
