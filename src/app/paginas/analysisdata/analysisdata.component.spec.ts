import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisdataComponent } from './analysisdata.component';

describe('AnalysisdataComponent', () => {
  let component: AnalysisdataComponent;
  let fixture: ComponentFixture<AnalysisdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalysisdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
