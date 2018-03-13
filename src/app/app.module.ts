import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { CalculatorPageModule } from '../pages/calculator/calculator.module';
import { CharacterPickerPageModule } from '../pages/character-picker/character-picker.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { GameCharacterAssignmentPageModule } from '../pages/game-character-assignment/game-character-assignment.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameCharacterProvider } from '../providers/game-character/game-character';
import { BossProvider } from '../providers/boss/boss';
import { PropertyProvider } from '../providers/property/property';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    CalculatorPageModule,
    CharacterPickerPageModule,
    SettingsPageModule,
    GameCharacterAssignmentPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameCharacterProvider,
    BossProvider,
    PropertyProvider
  ]
})
export class AppModule {}
