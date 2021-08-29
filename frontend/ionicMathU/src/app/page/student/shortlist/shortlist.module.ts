import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShortlistPageRoutingModule } from './shortlist-routing.module';
import { ShortlistPage } from './shortlist.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortlistPageRoutingModule
  ],
  declarations: [
    ShortlistPage,
    MenuComponent
  ]
})
export class ShortlistPageModule {}
