import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.css']
})
export class ListCreationComponent implements OnInit {

  listForm = new FormGroup({
    newList: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  lists =[]

  createList(name: FormGroup): void {
    this.lists.push(name.controls.newList.value)
  }

  deleteList(id: number): void {
    this.lists.splice(id, 1);
  }

}
