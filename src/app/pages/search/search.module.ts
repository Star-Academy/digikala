import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';
import {FiltersComponent} from './components/filters/filters.component';
import {GamesComponent} from './components/games/games.component';
import {SwitchComponent} from './components/switch/switch.component';
import {FormsModule} from '@angular/forms';
import {ExpansionListComponent} from './components/expansion-list/expansion-list.component';
import {SearchBoxModule} from '../../components/search-box/search-box.module';
import {FilterPipeModule} from '../../pipes/filter-pipe/filter-pipe.module';
import {RouterModule} from '@angular/router';
import { IncludesPipe } from './pipes/includes.pipe';

@NgModule({
    declarations: [SearchComponent, FiltersComponent, GamesComponent, SwitchComponent, ExpansionListComponent, IncludesPipe],
    imports: [CommonModule, BreadcrumbsModule, FormsModule, SearchBoxModule, FilterPipeModule, RouterModule],
})
export class SearchModule {}
