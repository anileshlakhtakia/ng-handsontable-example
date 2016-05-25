import {Component} from '@angular/core';
import {MasterComponent} from './master.component';
@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html',
    directives: [MasterComponent]
})
export class AppComponent { }
