import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient, public db: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }

  getData(){
    let ref = this.db.list('todos')
    let promise = new Promise((resolve, reject) => {
      ref.valueChanges().subscribe((datas)=>{
        console.log(datas)
        resolve(datas)
      },(err)=>{
        console.log(err)
        reject(err)
      })
    })
    return promise
  }

  // save(items){
  //   //this.storage.set('todos', items)

  // }
  save(item){
    //this.storage.set('todos', items)
    this.db.list('todos').push(item)
  }
}
