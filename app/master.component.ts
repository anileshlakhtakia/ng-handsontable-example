import {Component, Inject, ElementRef, EventEmitter, HostListener, ViewChild, AfterContentInit} from '@angular/core'
import { ProductDetails } from './core/ProductDetails';
import { Product } from './core/Product';
import { DomainList } from './core/DomainList';
import { ChildComponent } from './child.component';
declare var jQuery: any;
@Component({
    selector: 'master',
    templateUrl: './app/master.component.html',
    directives: [ChildComponent]
})
export class MasterComponent {
    elementRef: ElementRef;    
    private rowIndex: number = -1;   
    private newProduct: Array<Product>;
    @ViewChild(ChildComponent) childList: ChildComponent;
    selectedDetails: Array<ProductDetails> = new Array<ProductDetails>();
    /**
   * 
   * HandsonTable
   */
    colHeaders: Array<string>;
    columns: Array<any>;
    options: any;
    /**
     * End
     */

    constructor( @Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;        
        this.newProduct = new Array<Product>();


        for (var i = 0; i < 3; i++) {
            this.newProduct.push(this.createProduct());
        }
        this.selectedDetails = this.newProduct[0].Details;
        this.hadsontableCreate()    
    }

    private hadsontableCreate() {
        this.colHeaders = ['ProductId', 'Name', 'Description'];
        this.columns = [
            { data: 'ProductId', type: 'numeric' },
            { data: 'Name', type: 'text' },
            { data: 'Description', type: 'text' }
        ];
        this.options = {
            height: 400,
            dataSchema: { ProductId: null, Name: null, Description: null},
            colHeaders: ['ProductId', 'Name', 'Description'],
            stretchH: 'none',
            copyPaste: true,
            observeChanges: true,
            observeDOMVisibility: true,
            columnSorting: true,
            contextMenu: true,
            className: 'htCenter htMiddle',
            readOnly: false
        };
    }

    createProduct() {
        var newProduct: Product = new Product();
        newProduct.ProductId = this.newProduct.length + 1;
        newProduct.Details = new Array<ProductDetails>();
        for (var i = 0; i < 3; i++) {
            var details: ProductDetails = new ProductDetails();
            details.ProductDetailsId = newProduct.Details.length+1;            
            details.Name = "Detail For Product " + newProduct.ProductId +" And Detail Id "+ details.ProductDetailsId;
            newProduct.Details.push(details);
        }        
        return newProduct;
    }
}