import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NetworkInterface } from "@ionic-native/network-interface";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  status: Status;
  motion: number;
  ipaddress: string;
  constructor(public navCtrl: NavController, public netInt: NetworkInterface) {
    this.status = {
      name: "close-circle",
      color: "danger",
      message: "not connected"
    };

    this.motion = 0;

    const url = "www.google.com";
    this.netInt
      .getHttpProxyInformation(url)
      .then(proxy =>
        console.info(
          `Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`
        )
      )
      .catch(error => console.error(`Unable to get proxy info: ${error}`));
  }

  change(value: number) {
    this.motion = value;
  }
  send() {
    console.log(this.motion);
  }
  save(){
    // TODO- SAVE IP ADDRESS
  }
}


interface Status {
  name: string;
  color: string;
  message: string;
}
