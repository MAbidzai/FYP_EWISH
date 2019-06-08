import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FindListDialogComponent } from 'app/shared/find-list-dialog/find-list-dialog.component';
import { Router } from '@angular/router';

export interface DialogData {
  title: string;
  listID: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listId: any;

  constructor(public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FindListDialogComponent, {
      data: { title: 'Enter List ID Here' }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.listId = result;
        this.router.navigate(['/findList' , this.listId]);
      }

    });
  }

}
