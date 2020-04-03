import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPersonComponent } from './child-person.component';

describe('ChildPersonComponent', () => {
  let component: ChildPersonComponent;
  let fixture: ComponentFixture<ChildPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
