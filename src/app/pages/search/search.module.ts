import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';
import { FiltersComponent } from './components/filters/filters.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
    declarations: [SearchComponent, FiltersComponent, GamesComponent],
    imports: [CommonModule, BreadcrumbsModule],
})
export class SearchModule {}
