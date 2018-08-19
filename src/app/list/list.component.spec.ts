import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { ListComponent } from './list.component';
import { ListItemComponent } from '../list-item/list-item.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        ListComponent,
        ListItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new item', () => {
    expect(component.items.length).toEqual(1);
    component.addItem('test');
    expect(component.items.length).toEqual(2);
    expect(component.items[1]).toEqual('test')
  });

  it('should delete a specific item', () => {
    component.addItem('test');
    expect(component.items.length).toEqual(2);
    expect(component.items[0]).toEqual('Example Item')
    expect(component.items[1]).toEqual('test')
    component.deleteItem(0);
    expect(component.items.length).toEqual(1);
    expect(component.items[0]).toEqual('test')
  });

  it('should emit the delete item event', () => {
    component.onDeleteList(0);
    component.delList.subscribe(g => {
      expect(g).toEqual(0);
    });
  });

  describe('should ', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      component.addItem('Example Item 2');
      component.addItem('Example Item 3');
    });

    it('fail to move item up', () => {
      expect(component.items[0]).toEqual('Example Item');
      component.moveItem({up: true, id: 0});
      expect(component.items[0]).toEqual('Example Item');
    });

    it('fail to move item down', () => {
      expect(component.items[2]).toEqual('Example Item 3');
      component.moveItem({up: false, id: 2});
      expect(component.items[2]).toEqual('Example Item 3');
    });

    it('move item up', () => {
      expect(component.items[0]).toEqual('Example Item');
      expect(component.items[1]).toEqual('Example Item 2');
      component.moveItem({up: true, id: 1});
      expect(component.items[0]).toEqual('Example Item 2');
      expect(component.items[1]).toEqual('Example Item');
    });

    it('move item down', () => {
      expect(component.items[1]).toEqual('Example Item 2');
      expect(component.items[2]).toEqual('Example Item 3');
      component.moveItem({up: false, id: 1});
      expect(component.items[1]).toEqual('Example Item 3');
      expect(component.items[2]).toEqual('Example Item 2');
    });

  });



});
