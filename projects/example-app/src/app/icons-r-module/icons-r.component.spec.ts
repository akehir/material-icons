import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsRComponent } from './icons-r.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsRComponent', () => {
  let component: IconsRComponent;
  let fixture: ComponentFixture<IconsRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsRComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
