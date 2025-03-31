import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton } from '@ionic/angular/standalone';
import { Storage} from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonRadioGroup, IonRadio]
})
export class StatusPage implements OnInit {
  status:string=""
  constructor(private storage:Storage, private router:Router) { }

  async onButtonClick() {
    console.log(this.status);
    await this.storage.create();
    await this.storage.set('status', this.status);
    // This makes the save button automatically send you back to home page
    this.router.navigate(['/home'])
  }

  async ionViewWillEnter() {
    //Waits for storage to be saved so you dont outpace the code
    await this.storage.create();
    this.status = await this.storage.get('status');

  }

  ngOnInit() {
  }

}
