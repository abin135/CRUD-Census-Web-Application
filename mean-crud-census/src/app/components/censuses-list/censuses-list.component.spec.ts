import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusesListComponent } from './censuses-list.component';

describe('CensusesListComponent', () => {
  let component: CensusesListComponent;
  let fixture: ComponentFixture<CensusesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
