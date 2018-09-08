import { Injectable } from '@angular/core';
import {Log} from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
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

  getLogs() {
    return this.logs;
  }
}
