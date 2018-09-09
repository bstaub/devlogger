import { Component, OnInit } from '@angular/core';
import {Log} from '../../models/Log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  public logs: Log[];
  constructor(private logService: LogService) { }

  ngOnInit() {
    // this.logs = this.logService.getLogs(); // sync way
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;  // async way, better way
    });
  }
  onSelect(log: Log) {
    // console.log(log);
    this.logService.setFormLog(log);
  }

  onDelete(log: Log) {
    // console.log(log);
    if(confirm('Bist du sicher?')) {
      this.logService.deleteLog(log);
    }
  }
}
