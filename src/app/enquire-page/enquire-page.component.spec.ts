import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirePageComponent } from './enquire-page.component';

describe('EnquirePageComponent', () => {
  let component: EnquirePageComponent;
  let fixture: ComponentFixture<EnquirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
