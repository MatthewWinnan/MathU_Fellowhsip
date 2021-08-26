import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public alertController: AlertController,
  ) {}
  async presentAlertV2() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Not here yet',
      subHeader: '',
      message: 'Coming in v1.2',
      buttons: ["OK, can't wait"]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
