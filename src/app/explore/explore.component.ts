import { Component, OnInit } from '@angular/core';
import { Pin } from '../pin.model';
import { PinDataService } from '../pin-data.service';
import { Observable } from 'rxjs';
import {} from 'googlemaps';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  public lat: Number = 25;
  public long: Number = 0;
  public zoom: Number = 1.3;
  public mapType : String = 'terrain';
  public animation : String = null;
  public selectedPin: Pin = new Pin(0, 0, "Select a pin");
  public imgViewer : Boolean = false;

  private _fetchRecipes$: Observable<Pin[]> = this._pinDataService.pins$;
  public loadingError$ = this._pinDataService.loadingError$;
  public pins : Pin[];

  constructor(private _pinDataService: PinDataService) {
    
   this._fetchRecipes$.subscribe(val => this.pins = val);
  }

  get pins$(): Observable<Pin[]> {
    return this._fetchRecipes$;
  }

  ngOnInit() {
  }

  hoverOverPin(pin :Pin){
    pin.animation = 'BOUNCE';    
  }

  hoverOutPin(pin:Pin){
    pin.animation = 'null';
  }

  public selectPin(event): void {
    let lat = event.latitude;
    let lng = event.longitude;
    this.setCenter(lat,lng);
    this.zoom = 3;
    this._pinDataService.getPin$(lat, lng).subscribe(val => this.selectedPin = val);
    this.imgViewer = false;
  }
  
  private setCenter(lat,long){
    this.lat = lat;
    this.long = long;
  }

  public showImageViewer(bool){
    this.imgViewer = bool;
  }

}
