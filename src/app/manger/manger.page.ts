import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceWordpressService} from "../service-wordpress.service";
import {LoadingController, NavController} from "@ionic/angular";

@Component({
    selector: 'app-manger',
    templateUrl: './manger.page.html',
    styleUrls: ['./manger.page.scss'],
})
export class MangerPage implements OnInit {
    //public data: any = [];
    public products;

    constructor(
        public route: Router,
        private service: ServiceWordpressService,
        private loadingCtrl: LoadingController
    ) {
    }

    ngOnInit() {
        this.getProducts();
    }

    async getProducts() {
        this.service.loadingData();
        return this.service.getDataJson("ou-manger").subscribe(
            (products) => {
                this.products = products;
                this.loadingCtrl.dismiss();
                console.log(products);
            }
        )
    }

    cViewDetail(id,product){
        //return this.service.getViewDetail('manger/details/',detail);
        //console.log(detail);
        return this.route.navigate(['manger/details/',{id : id,product : product}]);
    }

}
