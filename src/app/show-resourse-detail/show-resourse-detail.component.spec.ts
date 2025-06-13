import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResourseDetailComponent } from './show-resourse-detail.component';

describe('ShowResourseDetailComponent', () => {
  let component: ShowResourseDetailComponent;
  let fixture: ComponentFixture<ShowResourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowResourseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowResourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
