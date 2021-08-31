import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldWideComponent } from './components/world-wide/world-wide.component';
import { RegionalComponent } from './components/regional/regional.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartMapComponent } from './components/charts/chart-map/chart-map.component';
import { ChartDiagramComponent } from './components/charts/chart-diagram/chart-diagram.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { FormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    WorldWideComponent,
    RegionalComponent,
    ChartsComponent,
    ChartMapComponent,
    ChartDiagramComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
