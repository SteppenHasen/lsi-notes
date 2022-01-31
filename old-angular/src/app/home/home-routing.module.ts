import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CreateNotePage } from '../create-note/create-note.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'create-note',
    component: CreateNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
