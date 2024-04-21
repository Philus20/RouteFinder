import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplentationComponent } from './implentation.component';

describe('ImplentationComponent', () => {
  let component: ImplentationComponent;
  let fixture: ComponentFixture<ImplentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImplentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImplentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
