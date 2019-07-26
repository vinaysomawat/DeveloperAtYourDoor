import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloperComponent } from './adddeveloper.component';

describe('AddDeveloperComponent', () => {
  let component: AddDeveloperComponent;
  let fixture: ComponentFixture<AddDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
