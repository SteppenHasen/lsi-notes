import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss'],
})
export class CreateNotePage implements OnInit {
  private createNote : FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.createNote = this.formBuilder.group({
      name: ['', Validators.required],
      content: [''],
      theme: [''],
      importance: [''],
      isList: []
    })
  }
  
  createNoteFunc() {
    let data = this.createNote.value
    alert(data)
  }

  ngOnInit() {
  }

}
