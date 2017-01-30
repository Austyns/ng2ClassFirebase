import { Component, Input } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import { Fellows } from './app.data';
import { FormsModule }   from '@angular/forms';
import { AngularFire, FirebaseListObservable, FirebaseRef, AngularFireDatabase } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.css','./app.component.css']
})

export class AppComponent {
	fellows : FirebaseListObservable<any[]>;
	constructor(private agf: AngularFire) {
		this.fellows = agf.database.list('fellows', {
												  query: {
												    limitToLast: 10,
												    orderByKey: true
												  }
												});
	}

 	title = 'Intoduction to angular2 Components! & Firebase W/O AngularFire';

 	public addFellow:boolean = false;
	public editable:boolean = false;
	// public numOfFellow:number;

 	felo = new Fellows;
 	felos = new Fellows;

	// Delete a fellow
	deleteSelected(fellow) {
		console.log(this.fellows);
	    this.fellows.remove(fellow);
	    // resolve(true);
	    console.log("deleted");
	    alert("Fellow has been deleted");
	}
	// Add new fellow
	addNewFellow(fellow) {

	    this.fellows.push(fellow);
	    // resolve(true);
	    console.log(fellow);
	    alert("Fellow has been Added");
	    this.felo = new Fellows;
	    this.addFellow = false;
	}


	editFellow(fell) {
		console.log(fell);
		this.felos = fell;
		this.editable = true;
	}
	// update a fellow

	updateFellow(key:string, fellow) {
		console.log(key);
		console.log(fellow);
	    this.fellows.update(key, fellow);
	    alert("Fellow has been Updated");
		this.editable = false;
	    this.felo = new Fellows;
	}

}
