import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segundapull } from './segundapull';

describe('Segundapull', () => {
  let component: Segundapull;
  let fixture: ComponentFixture<Segundapull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segundapull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segundapull);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
