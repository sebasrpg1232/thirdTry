import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoRegistroComponent } from './permiso-registro.component';

describe('PermisoRegistroComponent', () => {
  let component: PermisoRegistroComponent;
  let fixture: ComponentFixture<PermisoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
