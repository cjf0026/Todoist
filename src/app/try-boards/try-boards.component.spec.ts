import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryBoardsComponent } from './try-boards.component';

describe('TryBoardsComponent', () => {
  let component: TryBoardsComponent;
  let fixture: ComponentFixture<TryBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
