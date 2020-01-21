import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProductionContentComponent } from './video-production-content.component';

describe('VideoProductionContentComponent', () => {
  let component: VideoProductionContentComponent;
  let fixture: ComponentFixture<VideoProductionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoProductionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoProductionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
