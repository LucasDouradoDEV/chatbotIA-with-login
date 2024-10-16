import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSummitComponent } from './logo-summit.component';

describe('LogoSummitComponent', () => {
  let component: LogoSummitComponent;
  let fixture: ComponentFixture<LogoSummitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSummitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
