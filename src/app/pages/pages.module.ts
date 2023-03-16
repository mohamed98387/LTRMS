import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NgbNavModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";

import { WidgetModule } from "../shared/widget/widget.module";
import { UIModule } from "../shared/ui/ui.module";

import { FullCalendarModule } from "@fullcalendar/angular";

import { PagesRoutingModule } from "./pages-routing.module";

import { DashboardsModule } from "./dashboards/dashboards.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoaderService } from "../core/services/loader.service";
import { LoaderInterceptorService } from "../core/services/interceptors/loader-interceptor.service";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { AgenceComponent } from './callaborateurs_Ex/agence/agence.component';
import { VehiculeComponent } from './callaborateurs_Ex/vehicule/vehicule.component';
import { ChauffeurComponent } from './callaborateurs_Ex/chauffeur/chauffeur.component';

// import { UserComponent } from './administration/user-list/user-list.component';
// import { ListUserComponent } from './Administration/User/list-user-list/list-user-list.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
]);

@NgModule({
  declarations: [AgenceComponent, VehiculeComponent, ChauffeurComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    HttpClientModule,
    UIModule,
    WidgetModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
})
export class PagesModule {}
