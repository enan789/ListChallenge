import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  //Inputs for the lists name and id
  @Input() name: string;
  @Input() id: number;

  //Outputs of the deleteItem with the item's index and move with the item's id
  @Output() delItem = new EventEmitter<number>();
  @Output() move = new EventEmitter<any>();

  ngOnInit() {
    this.name = 'Item';
    this.id = 0;
  }

  //Emits the deleted item id
  onDeleteItem(): void {
    this.delItem.emit(this.id);
  }

  //Emits an up moving item's id
  moveItemUp(): void {
    this.move.emit({
      up: true,
      id: this.id
    });
  }

  //Emits a down moving item's id
  moveItemDown(): void {
    this.move.emit({
      up: false,
      id: this.id
    });
  }
}
