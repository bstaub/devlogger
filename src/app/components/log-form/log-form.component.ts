import {Component, OnInit} from '@angular/core';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: string;

  isNew: boolean = true;

  constructor(private logServcie: LogService) {
  }

  ngOnInit() {
    this.logServcie.selectedLog.subscribe(log => {
      // console.log(log);
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    // Check if new log
    // console.log(123);
    if (this.isNew) {
      // Create new Log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
        }
        // Add Log
        this.logServcie.addLog(newLog);
    } else {
      // Create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // Update log
      this.logServcie.updateLog(updLog);
    }
  }


  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
