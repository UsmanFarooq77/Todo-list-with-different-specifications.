import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
    todoListForm: FormGroup;
    listItems: any[];
    cloneListItems: any[];
    counter: number;
    constructor(private _fb: FormBuilder) {
        this.listItems = [];
        this.cloneListItems = [];
        this.counter = 0;
    }
    ngOnInit() {
        this.todoListForm = this._fb.group({
            formArrayListItems: this._fb.array([this.initializeListItems()]),
        });
    }
    initializeListItems(): FormGroup {
        return this._fb.group({
            fullName: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required],
        });
    }
    addMoreList() {
        this.formArrayListItems.push(this.initializeListItems());
    }
    saveTodoListForm(listValues: FormGroup) {
        this.listItems.push(listValues.value);
        for (let x of this.listItems) {
            for (let y in x.formArrayListItems) {
                this.cloneListItems[this.counter++] = x.formArrayListItems[y];
            }
        }
        this.listItems = [];
        listValues.reset();
    }
    deleteListData(index: number) {
        this.cloneListItems.splice(index, 1);
        this.counter--;
    }
    removeList(index: number) {
        if (this.formArrayListItems.length > 1) {
            this.formArrayListItems.removeAt(index);
        } else {
            alert("Atleast one row is mandatory in the form.");
        }
    }
    get formArrayListItems(): FormArray {
        return this.todoListForm.get("formArrayListItems") as FormArray;
    }
}
