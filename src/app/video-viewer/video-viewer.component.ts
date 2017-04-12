import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from '../interfaces';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
	@Input() video: IVideo;

	constructor() { }

  	ngOnInit() {
  	}

}
