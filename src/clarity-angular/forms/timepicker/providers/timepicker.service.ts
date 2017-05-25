
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

//const MINS: number[] = Array.from(Array(60).keys());
//const HRS: number[] = Array.from(Array(13).keys());

@Injectable()
export class TimepickerService {

    private _change: Subject<boolean> = new Subject<boolean>();

    get change(): Observable<boolean> {
        return this._change.asObservable();
    }

    open(): void {
        this._change.next(true);
    }

    close(): void {
        this._change.next(false);
    }

    getHours(): number {
        return (new Date()).getHours();
    }

    getMinutes(): number {
        return (new Date()).getMinutes();
    }
}
