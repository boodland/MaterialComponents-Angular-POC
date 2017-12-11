import { Component, AfterViewInit, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild(TemplateRef) ref;

  dialogRef: MatDialogRef<DialogMessageComponent>;
  message: string;
  sub: Subscription;

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.message = params['message'] || 'proceed';
      });
  }

  ngAfterViewInit() {
    setTimeout(
      () => { this.open(); }, 0
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
