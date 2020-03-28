import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsZComponent } from './icons-z.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsZComponent', () => {
  let component: IconsZComponent;
  let fixture: ComponentFixture<IconsZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsZComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
