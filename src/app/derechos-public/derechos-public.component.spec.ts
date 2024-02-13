import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosPublicComponent } from './derechos-public.component';

describe('DerechosPublicComponent', () => {
  let component: DerechosPublicComponent;
  let fixture: ComponentFixture<DerechosPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DerechosPublicComponent]
    });
    fixture = TestBed.createComponent(DerechosPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
