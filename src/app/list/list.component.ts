import { Component, Input, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() title: string;

  itemForm = {}

  constructor() {
    this.itemForm = new FormGroup({
      newItem: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  items = []

  addItem(item: FormGroup): void {
    console.log(item)
    this.items.push(item.controls.newItem.value)
  }

}
