import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header.component';
import {DividerModule} from '../divider/divider.module';
import {ProfileButtonComponent} from './components/profile-button/profile-button.component';
import {FormsModule} from '@angular/forms';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {MegaNavComponent} from './components/mega-nav/mega-nav.component';
import {SearchBoxModule} from '../search-box/search-box.module';

@NgModule({
    declarations: [HeaderComponent, ProfileButtonComponent, MegaNavComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, DividerModule, FormsModule, NgxPopperjsModule, SearchBoxModule],
})
export class HeaderModule {}
