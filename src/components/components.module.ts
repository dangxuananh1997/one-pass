import { NgModule } from '@angular/core';
import { SiteComponent } from './site/site';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [SiteComponent],
	imports: [IonicModule],
	exports: [SiteComponent]
})
export class ComponentsModule {}
