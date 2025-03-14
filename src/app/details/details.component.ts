import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  public providedId : number = 0

  public constructor(private route : ActivatedRoute){

    route.params.subscribe(params=>{
      this.providedId = params['id']
    })

  }

}
