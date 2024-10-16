import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSenaiComponent } from './logo-senai.component';

describe('LogoSenaiComponent', () => {
  let component: LogoSenaiComponent;
  let fixture: ComponentFixture<LogoSenaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSenaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoSenaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
