import {Component, OnInit} from '@angular/core';
import {ServiceWordpressService} from "../service-wordpress.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
    selector: 'app-dormir',
    templateUrl: './dormir.page.html',
    styleUrls: ['./dormir.page.scss'],
})
export class DormirPage implements OnInit {
    public products;

    constructor(
        public service: ServiceWordpressService,
        public route: Router,
        public loadingCtrl: LoadingController,
    ) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.service.loadingData();
        return this.service.getDataJson('ou-dormir').subscribe(
            (products) => {
                this.products = products;
                this.loadingCtrl.dismiss()
            }
        )
    }

    cViewDetail(id, product) {
        return this.route.navigate(['dormir/details-dormir', {'id': id, 'product': product}])
    }

}
