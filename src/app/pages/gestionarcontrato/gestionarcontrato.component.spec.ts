import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarcontratoComponent } from './gestionarcontrato.component';

describe('GestionarcontratoComponent', () => {
  let component: GestionarcontratoComponent;
  let fixture: ComponentFixture<GestionarcontratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarcontratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarcontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
