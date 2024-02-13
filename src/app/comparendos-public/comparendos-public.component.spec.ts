import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparendosPublicComponent } from './comparendos-public.component';

describe('ComparendosPublicComponent', () => {
  let component: ComparendosPublicComponent;
  let fixture: ComponentFixture<ComparendosPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparendosPublicComponent]
    });
    fixture = TestBed.createComponent(ComparendosPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
