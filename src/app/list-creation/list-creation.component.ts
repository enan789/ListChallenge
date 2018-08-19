import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.css']
})
export class ListCreationComponent implements OnInit {

  //Makes the reactive list form require an input and limit the length to 30
  //and allows the submit button to be disabled
  listForm = new FormGroup({
    newList: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  constructor() { }

  ngOnInit() {
  }

  //Contains an array of lists and allows the creation of default lists
  lists =['Example List']

  //Creates a list taking in the the title
  createList(name: FormGroup): void {
    this.lists.push(name.controls.newList.value)
  }

  //Deletes the list based on id
  deleteList(id: number): void {
    this.lists.splice(id, 1);
  }

}
