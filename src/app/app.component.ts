import {Component, ViewChild} from '@angular/core';
import {SnackbarComponent} from './components/snackbar/snackbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild('snackbarRef', {read: SnackbarComponent}) private snackbarRef!: SnackbarComponent;
}
