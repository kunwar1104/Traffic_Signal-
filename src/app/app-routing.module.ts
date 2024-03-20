import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficSingnalComponent } from './traffic-singnal/traffic-singnal.component';
import { DemoTrafficComponent } from './demo-traffic/demo-traffic.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"/trafic",
    pathMatch:"full"

  },
  {
  path:"trafic",
  component:TrafficSingnalComponent
  },
  {
    path:"demo",
    component: DemoTrafficComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
