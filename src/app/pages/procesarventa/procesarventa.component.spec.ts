import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarventaComponent } from './procesarventa.component';

describe('ProcesarventaComponent', () => {
  let component: ProcesarventaComponent;
  let fixture: ComponentFixture<ProcesarventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesarventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesarventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
