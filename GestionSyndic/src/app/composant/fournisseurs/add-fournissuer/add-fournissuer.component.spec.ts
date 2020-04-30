import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournissuerComponent } from './add-fournissuer.component';

describe('AddFournissuerComponent', () => {
  let component: AddFournissuerComponent;
  let fixture: ComponentFixture<AddFournissuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFournissuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFournissuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
