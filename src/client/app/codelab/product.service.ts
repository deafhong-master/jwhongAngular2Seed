import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    getPRoducts() {
        return Observable.create((observer: any) => observer.next(this._samples()) );
            // observer.error('ddd');
            // observer.complete('');
    }

    _samples() {
        return [
            {
            name: 'Sports Wears',
            products: [
                { stocked: true, name: 'pants', price: 30 },
                { stocked: false, name: 't-shirts', price: 30 },
                { stocked: false, name: 'shoes', price: 30 }
            ]
            },
            {
            name: 'Electronics',
            products: [
                { stocked: false, name: 'iphone', price: 30 },
                { stocked: false, name: 't-shirts', price: 30 },
                { stocked: false, name: 'shoes', price: 30 }
            ]
            }
        ];
    }
}