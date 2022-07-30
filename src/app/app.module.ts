import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgxPopperjsModule} from 'ngx-popperjs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {NotFoundModule} from './pages/not-found/not-found.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';
import {AuthModule} from './pages/auth/auth.module';
import {ProfileModule} from './pages/profile/profile.module';
import {HeaderModule} from './components/header/header.module';
import {DividerModule} from './components/divider/divider.module';
import {FooterModule} from './components/footer/footer.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxPopperjsModule,
        AppRoutingModule,
        HomeModule,
        NotFoundModule,
        SnackbarModule,
        AuthModule,
        ProfileModule,
        HeaderModule,
        DividerModule,
        FooterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
