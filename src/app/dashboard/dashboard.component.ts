import { Component, OnInit } from '@angular/core';
import { IVideo } from '../interfaces'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	//variable holding the video
	selectedVideo: IVideo;

	fromParent: any;
	fromParentAgain: boolean;

  constructor() { }

  ngOnInit() {
  }


  onVideoSelected(video: IVideo) {
  	this.selectedVideo = video;
  }
//callback functions from Output on stat-filters.component
  sendToParent(event) {
  	this.fromParent = event;
  	console.log('dashboard', event)
  }

  sendToParentAgain(event: boolean) {
  	this.fromParentAgain = event;
  	console.log('boolean', event);
  }
}
