import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, BreadcrumbsModule],
})
export class SearchModule {}
