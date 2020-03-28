import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsDComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
