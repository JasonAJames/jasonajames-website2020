import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPortfolioComponent } from './video-portfolio.component';

describe('VideoPortfolioComponent', () => {
  let component: VideoPortfolioComponent;
  let fixture: ComponentFixture<VideoPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
