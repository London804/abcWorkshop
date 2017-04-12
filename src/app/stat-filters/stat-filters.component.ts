import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
	@Output() onSendToParent:EventEmitter<string> = new EventEmitter()
	@Output() onSendToParentAgain:EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
  	console.log('send to Parent');

  	//event emit for parent to listen to
  	this.onSendToParent.emit('From parent');
  }

  sendToParentAgain() {
  	console.log('send to Parent again');
  	this.onSendToParentAgain.emit(true);
  }
}
