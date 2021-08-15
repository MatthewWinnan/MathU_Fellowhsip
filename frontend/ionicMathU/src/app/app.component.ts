import { Component } from '@angular/core';
import { Storage  } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private storage: Storage,
    private router:Router
  ) {
    //this.storage.create();
    //this.isStudent();
  }

  async ngOnInit(){  
    this.storage.create();
    //this.isStudent();
  }


}
