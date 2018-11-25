import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ModelFile } from '../modelfile';
import { ModelService } from '../model.service';
import { CLASSIFIERS } from '../classifiers';
import { Classifier } from '../classifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.less']
})
export class TrainComponent implements OnInit {
  classifiers = CLASSIFIERS;
  selectedClassifier: Classifier;
  modelFile: File;
  dataFile : File;
  name: string = "";
  error: string;

  constructor(public modelService: ModelService, public router : Router) {}

  ngOnInit() {
  }

  private getFileName(file: File) : string
  {
    var fileName = file.name;
    var extensionIndex = fileName.lastIndexOf(".");

    if (extensionIndex > 0)
    {
      fileName = fileName.substring(0, extensionIndex)
    }

    return fileName;
  }

  private updateName() : void {
    if (this.dataFile && this.modelFile && this.name == "")
    {
      this.name = this.getFileName(this.modelFile) + "_" + this.getFileName(this.dataFile)
    }
  }

  public modelFileDropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);

          this.modelFile = file;
          this.updateName();
        });
      }
    }
  }

  public dataFileDropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);

          this.dataFile = file;
          this.updateName();
        });
      }
    }
  }

  private validate() : boolean {
    if (!this.modelFile)
    {
      this.error = "Please upload model file."
      return false;
    }

    if (!this.dataFile)
    {
      this.error = "Please upload training data."
      return false;
    }

    if (!this.name)
    {
      this.error = "Please provide a name for the model."
      return false;
    }

    return true;
  }

  public onSubmit() : void {
    this.error = null;
    if (!this.validate())
    {
      return;
    }
    
    this.modelService.trainClassifier(this.selectedClassifier, this.dataFile, this.name).subscribe(data => {
      this.router.navigateByUrl("/");
    },
    err => {
      this.error = "Unable to complete your request. Please try again."
    });
  }
}
