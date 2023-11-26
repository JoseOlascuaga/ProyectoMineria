import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagooglecolabComponent } from './datagooglecolab.component';

describe('DatagooglecolabComponent', () => {
  let component: DatagooglecolabComponent;
  let fixture: ComponentFixture<DatagooglecolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagooglecolabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatagooglecolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
