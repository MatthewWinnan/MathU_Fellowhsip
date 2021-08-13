import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private storageService: StorageService) {
    this.storage.create();
  }

  getEmail(){
    return this.storageService.get('user');
  }


}
