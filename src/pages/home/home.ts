import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  status: Status
  constructor(public navCtrl: NavController) {
    this.status = {
      name: "close-circle",
      color: "danger",
      message: "not connected"
    }
  }
  

}

interface Status{
  name: string,
  color: string,
  message: string
}
