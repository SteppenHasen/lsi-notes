import { Component } from '@angular/core';

import { FOLDERS } from '../shared/folders';
import { NOTES } from '../shared/notes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  folders = FOLDERS
  notes = NOTES

  constructor() {}

}
