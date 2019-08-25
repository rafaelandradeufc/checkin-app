import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServicoComponent } from './menu-servico.component';

describe('MenuServicoComponent', () => {
  let component: MenuServicoComponent;
  let fixture: ComponentFixture<MenuServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
