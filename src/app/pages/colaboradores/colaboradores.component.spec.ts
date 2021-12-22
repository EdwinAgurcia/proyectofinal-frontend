import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColaboradoresComponent } from './colaboradores.component';

describe('ColaboradoresComponent', () => {
  let component: ColaboradoresComponent;
  let fixture: ComponentFixture<ColaboradoresComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
