import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat-graphs',
  templateUrl: './stat-graphs.component.html',
  styleUrls: ['./stat-graphs.component.scss']
})
export class StatGraphsComponent implements OnInit {
	@Input() a
 	@Input() b

  constructor() { }

  ngOnInit() {
  }

}
