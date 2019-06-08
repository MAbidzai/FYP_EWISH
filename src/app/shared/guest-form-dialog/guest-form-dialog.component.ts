import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-guest-form-dialog',
  templateUrl: './guest-form-dialog.component.html',
  styleUrls: ['./guest-form-dialog.component.scss']
})
export class GuestFormDialogComponent implements OnInit {

  form: FormGroup;

  constructor(  private fb: FormBuilder,
                public dialogRef: MatDialogRef<GuestFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit() {
      this.createUserForm();
  }


  createUserForm() {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
    // console.log(this.form.value);
  }

}
