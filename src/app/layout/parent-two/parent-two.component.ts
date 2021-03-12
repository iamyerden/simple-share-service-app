import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  displayValue: string;
  tempValue = '';

  constructor(private sharedService: SharedService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.sharedService.currentValue.subscribe(value => this.displayValue = value);
  }

  changeValue(): void {
    console.log(this.tempValue);
    if (this.tempValue != null && this.tempValue !== this.displayValue) {
      this.sharedService.changeValue(this.tempValue);
    } else {
      this.loggingService.log('No value or the same value!');
    }
  }
}
