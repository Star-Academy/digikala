import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {DividerModule} from '../divider/divider.module';
import {FormsModule} from '@angular/forms';
import {ProfileButtonComponent} from './components/profile-button/profile-button.component';
import {NgxPopperjsModule} from 'ngx-popperjs';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent, ProfileButtonComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, DividerModule, FormsModule, NgxPopperjsModule],
})
export class HeaderModule {}
