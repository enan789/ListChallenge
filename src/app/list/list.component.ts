import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {  ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //Creates input of the title and index of a list
  @Input() title: string;
  @Input() id: number;

  //Outputs the delete item event
  @Output() delList = new EventEmitter<number>();

  //Contains the items in the list
  items = [];

  constructor() { }

  //Creates a default for the items in a lists
  ngOnInit() {
    this.items = ['Example Item'];
  }

  //Makes the reactive item form require an input and limit the length to 20
  //and allows the submit button to be disabled
  form = new FormGroup({
    newItem: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  //Creates a new item using the name submitted
  addItem(item: string): void {
    this.items.push(item);
  }

  //Deletes an item based on the id
  deleteItem(id: number): void {
    this.items.splice(id, 1);
  }

  //Emits the deleted list id
  onDeleteList(id:number): void {
    this.delList.emit(this.id);
  }

  //Switches the position of items based off the id and direction emitted
  moveItem(move): void {
    if(move.id > 0 && move.up || move.id < this.items.length-1 && !move.up){
      let i = this.items[move.id];
      if(move.up){
        this.items[move.id] = this.items[move.id-1];
        this.items[move.id-1] = i;
      }
      else{
        this.items[move.id] = this.items[move.id+1];
        this.items[move.id+1] = i;
      }
    }
  }


}
