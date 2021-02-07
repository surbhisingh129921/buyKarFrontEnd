import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  
  name= ''
  constructor(
    private route:ActivatedRoute
  ){

  }

   ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
   }
 
}
