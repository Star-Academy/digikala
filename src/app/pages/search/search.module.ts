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

@NgModule({
    declarations: [SearchComponent, FiltersComponent, GamesComponent, SwitchComponent, ExpansionListComponent],
    imports: [CommonModule, BreadcrumbsModule, FormsModule, SearchBoxModule],
})
export class SearchModule {}
