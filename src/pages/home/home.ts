import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ViewItemPage } from '../view-item/view-item';
import { DataProvider } from '../../providers/data/data';
import * as _ from 'lodash'
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataProvider: DataProvider, public db: AngularFireDatabase) {
    //console.log("constructor")
    // this.dataProvider.getData().then((todos)=>{
    //   if(todos){
    //     this.items = todos
    //   }
    // })
    let ref = this.db.list('todos')
      // ref.valueChanges().subscribe((datas)=>{
      //   console.log(datas)
      //   this.items = datas
      // },(err)=>{
      //   console.log(err)
      // })
      ref.snapshotChanges().subscribe((datas)=>{
        console.log(datas)
        //this.items = datas
        let tempItem = []
        _.forEach(datas, (data)=>{
          let value = data.payload.val();
          let item = {id: data.key, title: value.title, description: value.description}
          tempItem.push(item)
        })
        this.items = tempItem
      },(err)=>{
        console.log(err)
      })
  }

  ngOnInit(){
    //console.log("ngOnInit")
    // this.items = [
    //   {title: 'Hi', description: 'test1'},
    //   {title: 'Hi_2', description: 'test2'},
    //   {title: 'Hi_3', description: 'test3'}
    // ]
  }

  addItem(){
    //console.log("added")
    let addModal = this.modalCtrl.create(AddItemPage)
    addModal.present()
    addModal.onDidDismiss((item)=>{
      if(item){
        if(item.title && item.description){
          //this.items.push(item)
          this.dataProvider.save(item)
        }
        else
          alert("information not correct")
      }
    })
  }

  viewItem(item){
    console.log("view "+item.description)
    this.navCtrl.push(ViewItemPage,{
      item: item
    })
  }

  removeItem(removeItem){
    //console.log(item.title + ' removed')
    // _.remove(this.items, (item) =>{
    //   return item.title == removeItem.title
    // })
    // this.dataProvider.save(this.items)
    this.db.list('todos').remove(removeItem.id)
  }

}
