import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedComponent } from './joined.component';

describe('JoinedComponent', () => {
  let component: JoinedComponent;
  let fixture: ComponentFixture<JoinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
