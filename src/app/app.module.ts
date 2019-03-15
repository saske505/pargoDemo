import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatProgressBarModule, MatBottomSheetModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatGridListModule, MatDividerModule, MatDialogModule, MatBadgeModule, MatChipsModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { SliderComponent } from './slider/slider.component';
import { TrackComponent } from './track/track.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { ProgressComponent } from './progress/progress.component';
import { ListComponent } from './list/list.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DetailsComponent } from './details/details.component';

const EXTRA_BREAKPOINTS = [{
  alias: 'xs.landscape',
  suffix: 'XsLandscape',
  mediaQuery: 'screen and (orientation: landscape) and (max-width: 559px)',
  priority: 1000,
  overlapping: false
}];

@NgModule({

  declarations: [
    AppComponent,
    MainNavComponent,
    TabsComponent,
    SliderComponent,
    TrackComponent,
    HomeComponent,
    LoginComponent,
    ProgressComponent,
    ListComponent,
    BottomSheetComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
    MatChipsModule,
    MatCardModule,
    TextFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: BREAKPOINT, useValue: EXTRA_BREAKPOINTS, multi: true }
  ],
  entryComponents: [BottomSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
