import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth' },
    {
        path: 'auth',
        loadChildren: async () => {
            const m = await import('@d-cave/feature-auth');
            return m.FeatureAuthModule;
        },
    },
    {
        path: 'dashboard',
        loadChildren: async () => {
            const m = await import('@d-cave/feature-dashboard');
            return m.FeatureDashboardModule;
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
