import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowenMenueComponent } from './dropdowen-menue.component';

describe('DropdowenMenueComponent', () => {
  let component: DropdowenMenueComponent;
  let fixture: ComponentFixture<DropdowenMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdowenMenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdowenMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
