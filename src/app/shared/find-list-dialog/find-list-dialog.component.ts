import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  listID: string;
}

@Component({
  selector: 'app-find-list-dialog',
  templateUrl: './find-list-dialog.component.html',
  styleUrls: ['./find-list-dialog.component.scss']
})
export class FindListDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FindListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
