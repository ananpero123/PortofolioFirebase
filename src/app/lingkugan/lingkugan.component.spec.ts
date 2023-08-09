import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingkuganComponent } from './lingkugan.component';

describe('LingkuganComponent', () => {
  let component: LingkuganComponent;
  let fixture: ComponentFixture<LingkuganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LingkuganComponent]
    });
    fixture = TestBed.createComponent(LingkuganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
