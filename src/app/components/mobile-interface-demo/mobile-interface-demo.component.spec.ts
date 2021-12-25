import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInterfaceDemoComponent } from './mobile-interface-demo.component';

describe('MobileInterfaceDemoComponent', () => {
  let component: MobileInterfaceDemoComponent;
  let fixture: ComponentFixture<MobileInterfaceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileInterfaceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileInterfaceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
