import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';


const MaterialCommonents = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule
];

@NgModule({

  imports: [MaterialCommonents],
  exports: [MaterialCommonents]
})
export class MaterialModule { }
