import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPortfolioPlayerComponent } from './video-portfolio-player.component';

describe('VideoPortfolioPlayerComponent', () => {
  let component: VideoPortfolioPlayerComponent;
  let fixture: ComponentFixture<VideoPortfolioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPortfolioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPortfolioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
