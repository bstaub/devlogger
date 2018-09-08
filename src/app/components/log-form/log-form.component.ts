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

  constructor(private logServcie: LogService) {
  }

  ngOnInit() {
    this.logServcie.selectedLog.subscribe(log => {
      // console.log(log);
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

}
