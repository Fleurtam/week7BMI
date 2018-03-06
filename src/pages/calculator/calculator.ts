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
  if (this.weight > 0 && this.height > 0) {
    let finalBMI = this.weight / (this.height / 100 * this.height / 100);
    this.bmiValue = parseFloat(finalBMI.toFixed(2));
    this.setBMImessage();
    }
  }

    private setBMImessage() {
      if (this.bmiValue < 18.5) {
        this.bmiMessage = "You have an eating disorder. Go get some kebab";
      }
      if (this.bmiValue > 18.5 && this.bmiValue < 25) {
        this.bmiMessage = "Congratulations! You're all good!";
      }
      if (this.bmiValue > 25 && this.bmiValue < 30) {
        this.bmiMessage = "You're not lost yet but we suggest you go on a diet!";
      }
      if (this.bmiValue > 30) {
        this.bmiMessage = "Please think about what you eat";
    }
 }
      ionViewDidLoad() {
        console.log('ionViewDidLoad CalculatorPage');
  };
}
