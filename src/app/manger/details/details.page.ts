import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceWordpressService} from "../../service-wordpress.service";
import {IonSlides, LoadingController} from "@ionic/angular";

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    public product: any = [];
    slideOptions = {
        initialSlide: 1,
        autoplay: true,
        speed: 500,
    }

    constructor(
        private activedRoute: ActivatedRoute,
        private service: ServiceWordpressService,
        private loadingCtrl: LoadingController) {
        this.service.loadingData();
        this.activedRoute.params.subscribe(
            (params) => {
                if (typeof params['product'] != 'undefined') {
                    this.product = params['product'];
                }
                if (typeof params['id'] != "undefined") {
                    this.service.getDataJson("detail-product", params['id']).subscribe(
                        (res) => {
                            //console.log(res);
                            //this.product = JSON.parse(JSON.stringify(res.toString()));
                            this.product = res;
                            this.loadingCtrl.dismiss();
                        }
                    )
                }
                console.log(params);
            })
    }

    slidesDidLoad(slides: IonSlides) {
        slides.startAutoplay;
    }

    ngOnInit() {
    }
}
