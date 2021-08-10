import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'src/app/todo-list-module/todo-list/todo-list.componet';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path:'todo-list', 
  loadChildren: () =>  import('./todo-list-module/todo-list.module').then((m => m.TodoListModule)),
  canLoad: [AuthGuard]
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
