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
  bmiValue: number;
  bmiMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

    calculateBMI() {
    let finalBMI = this.weight / (this.height / 100 * this.height / 100);
    this.bmiValue = parseFloat(finalBMI.toFixed(2));
    this.setBMImessage();
 }
    setBMImessage() {
      if (this.bmiValue < 18.5) {
        this.bmiMessage = "Underweight";
      }
      if (this.bmiValue > 18.5 && this.bmiValue < 25) {
        this.bmiMessage = "Normal";
      }
      if (this.bmiValue > 25 && this.bmiValue < 30) {
        this.bmiMessage = "Overweight";
      }
      if (this.bmiValue > 30) {
        this.bmiMessage = "Obese";
      }


 }

   ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  };

}
