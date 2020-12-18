import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";


@Injectable({
    providedIn: 'root'
})
export class ServiceWordpressService {
    public rootUrl: string = 'http://gtd-log.com/antho/wordpress/';
    public urlList = [
        {
            name: 'home',
            url: '/wp-json/'
        },
        {
            name: 'ou-manger',
            url: '/wp-json/wc/v2/products?category=17'
        },

        {
            name: 'ou-dormir',
            url: '/wp-json/wc/v2/products?category=16'
        },

        {
            name: 'detail-product',
            url: 'wp-json/wc/v2/products/'
        },
    ];

    constructor(
        public httpClient: HttpClient,
        public loadingCtrl: LoadingController
        ) {

    }

    getUrl(name,id) {
        for (var i = 0; i < this.urlList.length; i++) {
            if (this.urlList[i]['name'] == name) {
                return this.rootUrl + this.urlList[i]['url']  + id;
            }
        }
    }

    getDataJson(name,id = null,params = []){
        let url = this.getUrl(name,id);
        console.log(url);
        return this.httpClient.get(url)
            .map(response =>response);
    }

    async loadingData()
    {
        const loading = await this.loadingCtrl.create({
            message: 'Loading data ...'
        });
        loading.present();
    }
}
