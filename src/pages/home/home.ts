import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    console.log("constructor")
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
}
