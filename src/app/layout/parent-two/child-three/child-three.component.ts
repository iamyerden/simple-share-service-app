import { Component, OnInit } from '@angular/core';
import {ParentTwoComponent} from '../parent-two.component';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  displayValue: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentValue.subscribe(value => this.displayValue = value);
  }

}
