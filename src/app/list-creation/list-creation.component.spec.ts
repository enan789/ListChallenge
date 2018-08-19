import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { ListCreationComponent } from './list-creation.component';
import { ListComponent } from '../list/list.component';
import { ListItemComponent } from '../list-item/list-item.component';

describe('ListCreationComponent', () => {
  let component: ListCreationComponent;
  let fixture: ComponentFixture<ListCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        ListCreationComponent,
        ListComponent,
        ListItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should create a new list', () => {
    expect(component.lists.length).toEqual(1);
    component.createList('test');
    expect(component.lists.length).toEqual(2);
  });

  it('should delete a current list', () => {
    expect(component.lists.length).toEqual(1);
    component.deleteList(0);
    expect(component.lists.length).toEqual(0);
  });

});
