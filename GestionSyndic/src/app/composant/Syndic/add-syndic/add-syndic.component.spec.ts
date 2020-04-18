import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyndicComponent } from './add-syndic.component';

describe('AddSyndicComponent', () => {
  let component: AddSyndicComponent;
  let fixture: ComponentFixture<AddSyndicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSyndicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSyndicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
