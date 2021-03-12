import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedValue = new BehaviorSubject('NPC');

  currentValue = this.sharedValue.asObservable();

  constructor(private loggingService: LoggingService) { }

  changeValue(value: string): void {
    this.sharedValue.next(value);
    this.loggingService.log('Value changed to: ' + value);
  }
}
