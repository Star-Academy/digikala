import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {SlideshowComponent} from './slideshow/slideshow.component';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent],
    imports: [CommonModule, HeaderModule],
    exports: [SlideshowComponent],
})
export class HomeModule {}