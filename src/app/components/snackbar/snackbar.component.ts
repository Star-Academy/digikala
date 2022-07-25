import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_OUT_DELAY: number = 3_000;

    public message: string | null = null;
    public color: string | null = null;

    private interval: number | null = null;

    public constructor(private changeDetectorRef: ChangeDetectorRef) {}

    public show(message: string, color?: string): void {
        this.clearIntervalIfExists();

        this.message = message;
        this.color = color || null;

        this.changeDetectorRef.detectChanges();

        this.interval = setInterval(() => {
            this.message = null;
            this.interval = null;
        }, this.FADE_OUT_DELAY);
    }

    public closeButtonClickHandler(): void {
        this.clearIntervalIfExists();
        this.message = null;
    }

    private clearIntervalIfExists(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
