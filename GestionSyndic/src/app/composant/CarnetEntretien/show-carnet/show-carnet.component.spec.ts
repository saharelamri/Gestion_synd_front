import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarnetComponent } from './show-carnet.component';

describe('ShowCarnetComponent', () => {
  let component: ShowCarnetComponent;
  let fixture: ComponentFixture<ShowCarnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCarnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
