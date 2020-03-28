import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAComponent } from './icons-a.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsAComponent', () => {
  let component: IconsAComponent;
  let fixture: ComponentFixture<IconsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsAComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
