import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ViewItemsRoutingModule } from './view-items-routing.module';
import { ViewItemsComponent } from './view-items.component';
import { CommonModule } from '../../../../node_modules/@angular/common';


@NgModule({
  imports: [
    FormsModule,
    ViewItemsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ViewItemsComponent ]
})
export class ViewItemsModule { }
