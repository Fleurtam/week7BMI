import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

    calculateBMI() {
        weight / (height / 100 * height / 100);
  //   // final_bmi = weight / (height / 100 * height / 100)
    // BMI = weight / (height / 100 * height / 100)
  // }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
