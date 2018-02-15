import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilieresComponent } from './add-filieres.component';

describe('AddFilieresComponent', () => {
  let component: AddFilieresComponent;
  let fixture: ComponentFixture<AddFilieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
