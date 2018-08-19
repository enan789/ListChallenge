import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete item event', () => {
    component.delItem.subscribe(g => {
      expect(g).toEqual(0);
    });
    component.onDeleteItem();
  });

  it('should emit move item up event', () => {
    component.delItem.subscribe(g => {
      expect(g).toEqual({up:true, id:0});
    });
    component.moveItemUp();
  });

  it('should emit delete item event', () => {
    component.delItem.subscribe(g => {
      expect(g).toEqual({up:false, id:0});
    });
    component.moveItemDown();
  });

});
