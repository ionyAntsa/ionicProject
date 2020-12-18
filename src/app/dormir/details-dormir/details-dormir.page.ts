import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceWordpressService} from "../../service-wordpress.service";
import {IonSlides, LoadingController} from "@ionic/angular";

@Component({
    selector: 'app-details-dormir',
    templateUrl: './details-dormir.page.html',
    styleUrls: ['./details-dormir.page.scss'],
})
export class DetailsDormirPage implements OnInit {
    public product: any = [];
    slideOptions = {
        initialSlide: 1,
        speed: 400,
        autoplay: false,
    };

    constructor(
        private activedRoute: ActivatedRoute,
        private service: ServiceWordpressService,
        private loadingCtrl: LoadingController,
    ) {
        this.service.loadingData();
        this.activedRoute.params.subscribe(
            (params) => {
                if (typeof params['product'] != 'undefined') {
                    this.product = params['product']
                }
                if (typeof params['id'] != "undefined") {
                    this.service.getDataJson("detail-product", params['id']).subscribe(
                        (res) => {
                            this.product = res;
                            this.loadingCtrl.dismiss();
                            //console.log(this.product);
                        }
                    )
                }
                console.log(params);
            });
    }

    slidesDidLoad(slides: IonSlides) {
        slides.startAutoplay;
    }

    ngOnInit() {
    }

}
