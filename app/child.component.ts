import {Component, Inject, ElementRef, EventEmitter, HostListener} from '@angular/core'
import { ProductDetails } from './core/ProductDetails';
import { Product } from './core/Product';
import { DomainList } from './core/DomainList';
declare var jQuery: any;
@Component({
    selector: 'child',
    templateUrl: './app/child.component.html',
    directives: []
})
export class ChildComponent {
    elementRef: ElementRef;    
    private id: string = "gridChild";    
    productDetails: Array<ProductDetails>;
    types: Array<DomainList>;
    constructor( @Inject(ElementRef) elementRef: ElementRef) {

        this.elementRef = elementRef;      
        this.productDetails = new Array<ProductDetails>();
        this.getType();        
    }

    getType() {
        this.types = new Array<DomainList>();
        var item1: DomainList = new DomainList("1", "Type1");
        var item2: DomainList = new DomainList("2", "Type2");
        this.types.push(item1);
        this.types.push(item2);
    }

    getDetails() {
        return JSON.stringify(this.productDetails);
    }

    setDetails(detail: string) {
        this.productDetails = JSON.parse(detail);  
    }

    addRecord(detail: ProductDetails) {
        this.productDetails.push(detail);
    };

}