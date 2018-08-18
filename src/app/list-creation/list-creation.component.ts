import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.css']
})
export class ListCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lists =[]

  createList(name: FormControl): void {
    this.lists.push(name.value);
    console.log(name);
  }

}
