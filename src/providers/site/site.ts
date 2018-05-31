import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from '../../models/site';

@Injectable()
export class SiteProvider {

  constructor(public httpClient: HttpClient) {
  }

  getSite(): Promise<Site[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/fake-data/site-list.json')
        .toPromise()
        .then((res: Site[]) => {
          resolve(res);
        })
        .catch(err => console.log(err));
    });
  }

}
 