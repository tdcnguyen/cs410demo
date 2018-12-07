import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { Model } from '../model';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UploadEvent, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  models: Model[];
  info: string;

  constructor(private modelService : ModelService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.getModels();

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['savedModel'])
      {
        this.info = "Saved model " + params['savedModel'] + " successfully."
      }
    });
  }

  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }
  
  public modelFileDropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.modelService.upload(file, file.name).subscribe(
            data => this.info = "Saved model " + file.name + " successfully."
          );
          this.getModels();
        });
      }
    }
  }
}
