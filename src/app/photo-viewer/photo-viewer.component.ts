import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../models/dialog-data";

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  public photoIndex = 0;

  constructor(public dialogRef: MatDialogRef<PhotoViewerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.photoIndex = this.data.startIndex;
  }

  close(): void {
    this.dialogRef.close();
  }

  adjustPhotoIndex(i: number): void {
    this.photoIndex += i;

    if (this.photoIndex < 0) { // restart with last picture if first picture is reached
      this.photoIndex = this.data.pictures.length - 1;
    } else if (this.photoIndex >= this.data.pictures.length) { // start with first if last picture is reached
      this.photoIndex = 0;
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
