import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountComponent } from "./components/account/account.component";
import { DialogWindowComponent } from "./components/dialog-window/dialog-window.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterOutlet, RouterLink } from "@angular/router";
import { TuiButtonModule, TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { TuiAccordionModule, TuiCheckboxModule } from "@taiga-ui/kit";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
	declarations: [
		AccountComponent,
		DialogWindowComponent,
		HeaderComponent,
		LoginComponent,
		MainComponent,
		ProfileComponent,
		RegistrationComponent,
		StatisticsComponent,
	],
	imports: [
		CommonModule,
		TuiButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiAccordionModule,
    TuiCheckboxModule,
	],
	exports: [
		AccountComponent,
		DialogWindowComponent,
		HeaderComponent,
		LoginComponent,
		MainComponent,
		ProfileComponent,
		RegistrationComponent,
		StatisticsComponent,
		
		TuiButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiAccordionModule,
    TuiCheckboxModule,
	],
})
export class SharedModule { }