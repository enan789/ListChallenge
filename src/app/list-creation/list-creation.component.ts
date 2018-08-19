import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.css']
})
export class ListCreationComponent implements OnInit {

  //Makes the reactive list form require an input and limit the length to 20
  //and allows the submit button to be disabled
  form = new FormGroup({
    newList: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  //Contains the array of lists
  lists =[]

  //Creates a default for the lists
  constructor() { }

  ngOnInit() {
    this.lists = ['Example List']
  }

  //Creates a list taking in the the title
  createList(name: string): void {
    this.lists.push(name)
  }

  //Deletes the list based on id
  deleteList(id: number): void {
    this.lists.splice(id, 1);
  }

}
