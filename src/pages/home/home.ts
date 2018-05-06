import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ViewItemPage } from '../view-item/view-item';
import { DataProvider } from '../../providers/data/data';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    console.log("constructor")
    this.dataProvider.getData().then((todos)=>{
      if(todos){
        this.items = todos
      }
    })
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.items = [
      {title: 'Hi', description: 'test1'},
      {title: 'Hi_2', description: 'test2'},
      {title: 'Hi_3', description: 'test3'}
    ]
  }

  addItem(){
    //console.log("added")
    let addModal = this.modalCtrl.create(AddItemPage)
    addModal.present()
    addModal.onDidDismiss((item)=>{
      if(item){
        if(item.title && item.description){
          this.items.push(item)
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


}
