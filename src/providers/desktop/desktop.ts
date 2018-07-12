import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DesktopProvider {

  constructor(public http: HttpClient) {
  }

  copyToClipboard(s: string) {
    this.http.get(`http://hcisignalr.azurewebsites.net/api/DesktopClient/CopyToClipboard?s=${s}`).subscribe();
  }

  openInBrowser(username: string, password: string) {
    this.http.get(`http://hcisignalr.azurewebsites.net/api/DesktopClient/OpenInDesktop?username=${username}&password=${password}`).subscribe();
  }

}
