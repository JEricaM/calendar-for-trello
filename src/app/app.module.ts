import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './routes';
import {CalendarService} from './services/calendar.service';
import {TrelloAuthService} from './services/trello-auth.service';
import {TrelloHttpService} from './services/trello-http.service';
import {SetTokenComponent} from './components/set-token/set-token.component';
import {MemberGuard} from './services/guards/memberGuard';
import {VisitorGuard} from './services/guards/visitorGuard';
import {TrelloPullService} from './services/trello-pull.service';
import {DndModule} from 'ng2-dnd';
import 'moment/locale/fr';
import 'moment/locale/de';
import {SearchComponent} from './components/search/search.component';
import {DateTimeFormatService} from './services/date-time-format.service';
import {SettingsModule} from './settings/settings.module';
import {CalendarModule} from './calendar/calendar.module';
import {ReduxModule} from './redux/redux.module';
import {
  MdButtonModule, MdCardModule, MdCoreModule, MdDatepickerModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdNativeDateModule,
  MdSelectModule, MdSidenavModule, MdSnackBarModule, MdToolbarModule
} from '@angular/material';
import {FrontPageModule} from './front-page/front-page.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AboutModule} from './about/about.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RavenErrorHandler} from './shared/RavenErrorHandler';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {MemberActions} from './redux/actions/member-actions';
import {LabelActions} from './redux/actions/label-actions';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DropZoneService} from './services/drop-zone.service';
import {LegalModule} from './legal/legal.module';


@NgModule({
  declarations: [
    AppComponent,
    SetTokenComponent,
    SearchComponent,
    SidebarComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    DndModule.forRoot(), // https://github.com/akserg/ng2-dnd/pull/90
    SettingsModule,
    CalendarModule,
    AboutModule,
    ReduxModule,
    FrontPageModule,
    MdCoreModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdSelectModule,
    MdListModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MdMenuModule,
    MdInputModule,
    MdSnackBarModule,
    MdIconModule,
    LegalModule,
  ],
  providers: [
    CalendarService,
    TrelloAuthService,
    TrelloHttpService,
    MemberGuard,
    VisitorGuard,
    TrelloPullService,
    DateTimeFormatService,
    MemberActions,
    LabelActions,
    DropZoneService,
    {provide: ErrorHandler, useClass: RavenErrorHandler}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
