import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ViewItemsComponent } from './view-items.component';


const routes: Routes = [
  {
    path: '',
    component: ViewItemsComponent,
    data: {
      title: 'View Items'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewItemsRoutingModule {}
