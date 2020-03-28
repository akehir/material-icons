import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPComponent } from './icons-p.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsPComponent', () => {
  let component: IconsPComponent;
  let fixture: ComponentFixture<IconsPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
