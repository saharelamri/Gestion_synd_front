import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSyndicComponent } from './update-syndic.component';

describe('UpdateSyndicComponent', () => {
  let component: UpdateSyndicComponent;
  let fixture: ComponentFixture<UpdateSyndicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSyndicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSyndicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
