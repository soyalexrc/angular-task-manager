import { NgModule } from '@angular/core';
import { ScopedComponentAComponent } from './components/scoped-component-a/scoped-component-a.component';
import { ScopedComponentBComponent } from './components/scoped-component-b/scoped-component-b.component';
import {DashboardRoutingModule} from "./dashboard.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ScopedComponentAComponent,
    ScopedComponentBComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DashboardModule { }
