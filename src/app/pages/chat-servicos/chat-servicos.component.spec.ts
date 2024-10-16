import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatServicosComponent } from './chat-servicos.component';

describe('ChatServicosComponent', () => {
  let component: ChatServicosComponent;
  let fixture: ComponentFixture<ChatServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
