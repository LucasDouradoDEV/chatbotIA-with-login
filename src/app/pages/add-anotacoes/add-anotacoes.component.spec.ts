import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnotacoesComponent } from './add-anotacoes.component';

describe('AddAnotacoesComponent', () => {
  let component: AddAnotacoesComponent;
  let fixture: ComponentFixture<AddAnotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnotacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAnotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
