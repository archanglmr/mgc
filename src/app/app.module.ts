import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CalculatorPage } from '../pages/calculator/calculator';
import { CharacterPickerPage } from '../pages/character-picker/character-picker';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { GameCharacterAssignmentPage } from '../pages/game-character-assignment/game-character-assignment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameCharacterProvider } from '../providers/game-character/game-character';
import { BossProvider } from '../providers/boss/boss';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorPage,
    CharacterPickerPage,
    TabsPage,
    SettingsPage,
    GameCharacterAssignmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorPage,
    CharacterPickerPage,
    TabsPage,
    SettingsPage,
    GameCharacterAssignmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameCharacterProvider,
    BossProvider
  ]
})
export class AppModule {}
