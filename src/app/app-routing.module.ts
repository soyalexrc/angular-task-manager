import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {AuthLayoutComponent} from "./core/layouts/auth-layout/auth-layout.component";
import {DashboardLayoutComponent} from "./core/layouts/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'boards',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'home',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'configuration',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./features/config/config.module').then(m => m.ConfigModule)
  },

  { path: '**', redirectTo: 'boards', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
