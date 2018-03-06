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
    let finalBMI = weight / (height / 100 * height / 100);
    obj.setBMImessage = parseFloat(setBMImessage.toFixed(2));
    setBMImessage(obj);
 }
    setBMImessage() {
      if (obj.calculateBMI < 18.5) {
        obj.setBMImessage = "Underweight";
      }
      if (obj.calculateBMI > 18.5 && obj.calculateBMI < 25) {
        obj.setBMImessage = "Normal";
      }
      if (obj.calculateBMI > 25 && obj.calculateBMI < 30) {
        obj.setBMImessage = "Overweight";
      }
      if (obj.calculateBMI > 30) {
        obj.setBMImessage = "Obese";
      }


 }

   ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  };

}
