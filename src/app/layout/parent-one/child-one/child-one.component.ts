import { Component, OnInit } from '@angular/core';
import {ParentOneComponent} from '../parent-one.component';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  displayValue: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentValue.subscribe(value => this.displayValue = value);
  }

}
