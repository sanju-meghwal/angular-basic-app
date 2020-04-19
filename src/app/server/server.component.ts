import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit,OnChanges {
	serverName = '';
	count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) { 
	this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
	  
  }
	onServerClick(){
	}
	onInput(event){
		this.serverName = event.target.value;
	}
	 ngOnChanges(changes: SimpleChanges){
		console.log("ngonchanges methos call");
		console.log(changes);
	}
}
