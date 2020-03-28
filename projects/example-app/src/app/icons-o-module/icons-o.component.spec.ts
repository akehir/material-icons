import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsOComponent } from './icons-o.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsOComponent', () => {
  let component: IconsOComponent;
  let fixture: ComponentFixture<IconsOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsOComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
