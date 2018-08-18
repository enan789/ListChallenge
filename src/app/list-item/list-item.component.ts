import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() name: string;
  @Input() id: number;

  @Output() delItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(): void {
    this.delItem.emit(this.id);
  }


}
