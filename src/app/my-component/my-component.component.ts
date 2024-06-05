import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface PeriodicElement {
  mrp: string;
  cat_no: string;
  std_pkg: number;
  type: string;
}

const ELEMENT_DATA = [
  {cat_no: "CS94106", mrp: '955', std_pkg: 20, type: '3 Pole Power Contactors - MNX-9A (AC-3) & 25A (AC-1)'},
  {cat_no: "CS94107", mrp: '1100', std_pkg: 10, type: 'MNX 19'},
  {cat_no: "CS94108", mrp: '1800', std_pkg: 30, type: 'MNX 20'},
  {cat_no: "CS94109", mrp: '500', std_pkg: 40, type: 'MNX 21'},
  {cat_no: "CS94110", mrp: '2200', std_pkg: 50, type: 'MNX 22'},
  {cat_no: "CS94111", mrp: '9550', std_pkg: 60, type: 'MNX 34'},
  {cat_no: "CS94112", mrp: '1233', std_pkg: 80, type: 'MNX 56'},
  {cat_no: "CS94113", mrp: '2343', std_pkg: 20, type: 'MNX 9'},
  {cat_no: "CS94114", mrp: '345', std_pkg: 20, type: 'MNX 9'},
  {cat_no: "CS94115", mrp: '95', std_pkg: 20, type: 'MNX 9'},
];

const COLUMNS_SCHEMA = [
  {
      key: "cat_no",
      type: "text",
      label: "Category Number"
  },
  {
      key: "mrp",
      type: "text",
      label: "MRP"
  },
  {
      key: "std_pkg",
      type: "text",
      label: "Std Pkg"
  },
  {
    key: "type",
    type: "text",
    label: "Type"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
}
]
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule, FormsModule],
})
export class MyComponentComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //dataSource = ELEMENT_DATA;
  //showInputComments = true
  columnsSchema: any = COLUMNS_SCHEMA;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
