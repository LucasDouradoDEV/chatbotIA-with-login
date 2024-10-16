import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPalestraComponent } from './chat-palestra.component';

describe('ChatPalestraComponent', () => {
  let component: ChatPalestraComponent;
  let fixture: ComponentFixture<ChatPalestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatPalestraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatPalestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
