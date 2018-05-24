import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ToolsPage } from '../tools/tools';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  toolsPage = ToolsPage;
  settingsPage = SettingsPage;

  constructor() {

  }
}
