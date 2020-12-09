import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
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
        public httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        this.test();
        //this.test1();
    }

    test() {
        console.log('tester');
        return this.httpClient.get("http://gtd-log.com/antho/wordpress/wp-json").subscribe(
            (res) => {
                this.data.push(res);
                console.log(res);
            });
    }

    tryData() {

    }

    /*test1(){
        return this.httpClient.get("http://gtd-log.com/antho/wordpress/wp-json")
            .map(data=>data)
            .subscribe((data:any) =>{
                this.data.push(data);
                console.log(data);
            })
    }*/
}



