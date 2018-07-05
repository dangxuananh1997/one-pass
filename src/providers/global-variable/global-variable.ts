import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariableProvider {

  public isLogin: boolean = false;
  public isConnectedToDevice: boolean = false;

  constructor(public http: HttpClient) { }

}
