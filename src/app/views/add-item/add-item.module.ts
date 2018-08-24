import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AddItemComponent } from './add-item.component';
import { AddItemRoutingModule } from './add-item-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AddItemRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AddItemComponent ]
})
export class AddItemModule { }
