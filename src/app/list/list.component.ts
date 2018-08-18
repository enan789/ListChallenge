import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() id: number;

  @Output() delList = new EventEmitter<number>();

  itemForm = new FormGroup({
    newItem: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  items = []

  ngOnInit() {
  }

  addItem(item: FormGroup): void {
    this.items.push(item.controls.newItem.value);
  }

  deleteItem(id: number): void {
    this.items.splice(id, 1);
  }

  onDeleteList(id:number): void {
    this.delList.emit(this.id);
  }


}
