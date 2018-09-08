import { Injectable } from '@angular/core';
import {Log} from '../models/Log';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null}); // initial Typ Log null
  selectedLog = this.logSource.asObservable(); // ist jetzt ein Observable

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Component',
        date: '12/27/2018'
      },
      {
        id: '2',
        text: 'Dummy2',
        date: '10/03/2018'
      },
      {
        id: '3',
        text: 'Dummy3t',
        date: '12/12/2018'
      },
    ];
  }
  /*
  getLogs() {
    return this.logs;  // sync way
  }
  */
  getLogs(): Observable<Log[]> {
    return of(this.logs);  // async way
  }

  setFormLog(log: Log) {
    this.logSource.next(log); // each time we click, we want update the form input
  }
}
