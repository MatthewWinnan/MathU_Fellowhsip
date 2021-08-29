import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage  } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private storage: Storage) {
  }

  async ngOnInit(){  
    
  }

}
