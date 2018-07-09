import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToolsPage } from '../pages/tools/tools';
import { SettingsPage } from '../pages/settings/settings';
import { ComponentsModule } from '../components/components.module';
import { AddSitePage } from '../pages/add-site/add-site';
import { GlobalVariableProvider } from '../providers/global-variable/global-variable';
import { SiteProvider } from '../providers/site/site';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { SiteDetailsPage } from '../pages/site-details/site-details';
import { GeneratePasswordPage } from '../pages/generate-password/generate-password';
import { ExportBackupPage } from '../pages/export-backup/export-backup';
import { ConnectToPcPage } from '../pages/connect-to-pc/connect-to-pc';
import { ConnectedPcPage } from '../pages/connected-pc/connected-pc';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { Clipboard } from '@ionic-native/clipboard';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolsPage,
    SettingsPage,
    AddSitePage,
    TabsPage,
    LoginPage,
    SiteDetailsPage,
    GeneratePasswordPage,
    ExportBackupPage,
    ConnectToPcPage,
    ConnectedPcPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ToolsPage,
    SettingsPage,
    AddSitePage,
    TabsPage,
    LoginPage,
    SiteDetailsPage,
    GeneratePasswordPage,
    ExportBackupPage,
    ConnectToPcPage,
    ConnectedPcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteProvider,
    GlobalVariableProvider,
    FingerprintAIO,
    Clipboard
  ]
})
export class AppModule {}
