import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSobreEventoComponent } from './chat-sobre-evento.component';

describe('ChatSobreEventoComponent', () => {
  let component: ChatSobreEventoComponent;
  let fixture: ComponentFixture<ChatSobreEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSobreEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSobreEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
