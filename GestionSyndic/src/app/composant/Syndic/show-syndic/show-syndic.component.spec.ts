import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSyndicComponent } from './show-syndic.component';

describe('ShowSyndicComponent', () => {
  let component: ShowSyndicComponent;
  let fixture: ComponentFixture<ShowSyndicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSyndicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSyndicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
