import {Component, Input} from '@angular/core';
import {Breadcrumb} from './models/breadcrumb.model';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
    @Input() public breadcrumbs: Breadcrumb[] = [];
}
