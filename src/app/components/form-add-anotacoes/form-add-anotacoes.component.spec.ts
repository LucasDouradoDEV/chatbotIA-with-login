import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAnotacoesComponent } from './form-add-anotacoes.component';

describe('FormAddAnotacoesComponent', () => {
  let component: FormAddAnotacoesComponent;
  let fixture: ComponentFixture<FormAddAnotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddAnotacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddAnotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
