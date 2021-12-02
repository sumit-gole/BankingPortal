import { BankService } from './../../services/bank/bank.service';
import { bank } from './../../models/bank';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string | any;
  incomeAmonut: number | any;
  outcomeAmonut: number | any;
  signAmount: number | any;

  incomeCount: number | any;
  outcomeCount: number | any;
  signCount: number | any;
  
  text: string | any;
  pay: any;
  bankPayment: bank[] | any;

  date: Date | any = new Date().toLocaleString("default", { weekday: "long" });

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    var incomeCalculate = 0;
    var outcomeCalculate = 0;
    var signCalculate = 0;
    var countOutcome = 0;
    var countIncome = 0;
    var countSign = 0;

    this.bankService.getData().subscribe((data) => {
      console.log(data)
      this.bankPayment = data;

      for (let i = 0; i < this.bankPayment.length; i++) {

        if (this.bankPayment[i].Category == "Income") {
          countIncome = countIncome + 1
          incomeCalculate = incomeCalculate + this.bankPayment[i].Amount;
        }

        if (this.bankPayment[i].Category == "Outcome") {
          outcomeCalculate = outcomeCalculate - this.bankPayment[i].Amount;
          countOutcome = countOutcome + 1;
        }

        if (this.bankPayment[i].Category == "Sign") {
          countSign = countSign + 1
          signCalculate = signCalculate + this.bankPayment[i].Amount;
        }

        this.outcomeCount = countOutcome;
        this.incomeCount = countIncome;
        this.signCount = countSign;
        this.incomeAmonut = incomeCalculate;
        this.outcomeAmonut = outcomeCalculate;
        this.signAmount = signCalculate;
      }
    });
  }

}
