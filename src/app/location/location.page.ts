import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Network } from '@capacitor/network';
import { Device } from '@capacitor/device';
import { Dialog, PromptResult } from '@capacitor/dialog';



@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {

  latitude = 0
  longitude = 0
  networkStatus = ""
  connected : boolean = false
  uuid : string = "unknown"
  language : string = "unknown"
  promptRes? : PromptResult;

  constructor() { }

  ngOnInit() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     })

    Device.getId().then((resp) => {
      this.uuid = resp.uuid;
    });

    Device.getLanguageTag().then((resp) => {
      this.language = resp.value;
    });

    Dialog.prompt({
        title: 'Confirm',
        message: `Enter your student number!`,
      }).then((resp) => {
        console.log('Confirmed:', resp);
        this.promptRes = resp
      })
    
}

  async getNetworkStatus() {
    const status = await Network.getStatus();
    this.networkStatus = status.connectionType;
    this.connected = status.connected
    console.log('Network status:', status);
  }

}