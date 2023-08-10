import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPortofolioComponent } from './read-portofolio.component';

describe('ReadPortofolioComponent', () => {
  let component: ReadPortofolioComponent;
  let fixture: ComponentFixture<ReadPortofolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadPortofolioComponent]
    });
    fixture = TestBed.createComponent(ReadPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
