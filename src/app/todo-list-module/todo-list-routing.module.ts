import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { TodoListComponent } from './todo-list/todo-list.componet';

const routes: Routes = [{ path: '', component: TodoListComponent, canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
