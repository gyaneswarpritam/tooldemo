import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AwesomeTooltipDirective } from './custom-directive/awesome-tooltip.directive';
import { TooltipComponent } from './component/tooltip/tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, AwesomeTooltipDirective, TooltipComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AwesomeTooltipDirective],
})
export class AppModule {}
