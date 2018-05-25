import { Component, Input, OnInit } from '@angular/core';
import { Site } from '../../models/site';

@Component({
  selector: 'site',
  templateUrl: 'site.html'
})
export class SiteComponent implements OnInit {
  @Input() site: Site;

  showPassword: boolean = false;

  constructor() {
  }

  ngOnInit() {
    
  }

}
