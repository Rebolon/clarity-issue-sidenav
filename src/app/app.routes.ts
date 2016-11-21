import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutComponent as LayoutStoryComponent} from './item/layout.component';
import {Sub1Component as ItemSub1Component} from "./item/sub1/sub1.component";

export const ROUTES: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "item", component: LayoutStoryComponent, children: [
    {path: ""},
    {path: "sub1", component: ItemSub1Component},
  ]}
];
