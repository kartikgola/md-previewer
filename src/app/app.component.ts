import { Component, OnInit, OnChanges } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  input: string = '';

  constructor(){
  }

  ngOnInit(): void {
  }
}
