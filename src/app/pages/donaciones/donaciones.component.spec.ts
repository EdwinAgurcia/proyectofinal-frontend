import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DonacionesComponent } from './donaciones.component';

describe('DonacionesComponent', () => {
  let component: DonacionesComponent;
  let fixture: ComponentFixture<DonacionesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
