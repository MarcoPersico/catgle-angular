import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() kitties;
  @Input() error;
  @Input() noKitties;

  constructor() { }

  ngOnInit() {
  }

}
