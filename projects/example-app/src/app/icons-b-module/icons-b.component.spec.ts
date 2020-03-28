import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBComponent } from './icons-b.component';
import { MaterialIconsModule } from '@triangular/material-icons';

describe('IconsBComponent', () => {
  let component: IconsBComponent;
  let fixture: ComponentFixture<IconsBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsBComponent ],
      imports: [
        MaterialIconsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
