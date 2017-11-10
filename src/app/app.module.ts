/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule, registerLocaleData} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ClarityModule} from "../clarity-angular/clarity.module";

import {AppComponent} from "./app.component";
import {ROUTING} from "./app.routing";
import {AppContentContainerComponent} from "./content-container.component";
import {LandingComponent} from "./landing.component";

import localeEsMX from "@angular/common/locales/es-MX";
import localeFrCA from "@angular/common/locales/fr-CA";

registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA);

@NgModule({
    declarations: [AppComponent, LandingComponent, AppContentContainerComponent],
    imports: [BrowserAnimationsModule, CommonModule, FormsModule, ClarityModule, ROUTING],
    bootstrap: [AppComponent]
})
export class AppModule {}
