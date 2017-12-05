import { Component, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements AfterViewInit {

  @ViewChild(TemplateRef) ref;

  dialogRef: MatDialogRef<DialogMessageComponent>;

  constructor(private dialog: MatDialog, private router: Router) {
  }

  ngAfterViewInit() {
    setTimeout(
      () => { this.open(); }, 0
    );
  }

  open() {
    this.dialogRef = this.dialog.open(this.ref);
    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([{ outlets: { dialog: null }}]);
    });
  }

  private close() {
    this.dialogRef.close();
  }

}
