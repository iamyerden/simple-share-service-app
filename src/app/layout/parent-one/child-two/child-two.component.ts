import { Component, OnInit } from '@angular/core';
import {ParentOneComponent} from '../parent-one.component';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  displayValue: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentValue.subscribe(value => this.displayValue = value);
  }

}
