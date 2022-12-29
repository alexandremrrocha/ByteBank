import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  transferir($event){
    console.log($event);
    const transferencia = {...$event, data: moment().format('DD/MM/YYYY hh:mm:ss')}
    this.transferencias.push(transferencia);
  }

}
