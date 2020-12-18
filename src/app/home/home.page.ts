import {Component, OnInit} from '@angular/core';
import {ServiceWordpressService} from "../service-wordpress.service";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
//import {Http} from '@angular/http'
//import 'rxjs/add/operator/map'


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public data: any = [];

    constructor(
        public service: ServiceWordpressService,
        public route: Router
    ) {
    }

    ngOnInit(): void {
        this.getHome();

    }

    getHome() {
        return this.service.getDataJson("home").subscribe(
            (res) => {
                this.data.push(res);
                console.log(res);
            }
        )
    }
}



