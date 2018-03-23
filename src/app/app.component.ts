import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greet = 'welcome!';
  alert;
  cool;
  showAlert: Boolean;
  oK: Boolean;
  bgColor =  'red';
  coolBgColor = 'green';

  ngOnInit() {
    setTimeout(() => {
      this.showAlert = true;
      this.alert = 'This is an Alert! you did something wrong!';
      setTimeout(() => {
        this.oK = true;
        this.cool = 'You are OK';
      }, 5000);
      }, 5000);
  }

}
