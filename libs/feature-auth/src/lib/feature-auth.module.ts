import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ButtonDirectiveModule, InputDirectiveModule } from '@d-cave/ui-shared';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, ButtonDirectiveModule, InputDirectiveModule],
    declarations: [LoginComponent, RegisterComponent],
})
export class FeatureAuthModule {}
