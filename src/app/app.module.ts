import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting';
import { AddItemPage } from '../pages/add-item/add-item';
import { ViewItemPage } from '../pages/view-item/view-item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyDPIqKJu1AMNcRZGenhkjSGEsWYCLLS0r8",
  authDomain: "todo-ab486.firebaseapp.com",
  databaseURL: "https://todo-ab486.firebaseio.com",
  projectId: "todo-ab486",
  storageBucket: "todo-ab486.appspot.com",
  messagingSenderId: "924296360904"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddItemPage,
    ViewItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddItemPage,
    ViewItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
