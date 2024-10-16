import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatServicosSenaiComponent } from './chat-servicos-senai.component';

describe('ChatServicosSenaiComponent', () => {
  let component: ChatServicosSenaiComponent;
  let fixture: ComponentFixture<ChatServicosSenaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatServicosSenaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatServicosSenaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
