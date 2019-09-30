import { Component, OnInit, Input, Output, EventEmitter, SystemJsNgModuleLoader } from '@angular/core';
import { Pin } from '../pin.model';
import { PinDataService } from '../pin-data.service';
import { Observable } from 'rxjs';
import {} from 'googlemaps';
import { Photo } from 'src/app/photo.model';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat: Number = 25;
  public long: Number = 0;
  public zoom: Number = 1.3;
  public mapType : String = 'terrain';
  public animation : String = null;
  public selectedPin: Pin = new Pin(0, 0, "Select a pin");

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

  addPin(lat, long) {
    if(this.pins.find(pin => pin.lat===lat && pin.long === long)){
      console.log(`pin(${lat},${long}) has already been added`);
    }
    else{
      let pin: Pin = new Pin(lat, long);
      pin.animation = 'DROP';
      this._pinDataService.addNewPin(pin).subscribe();
      this.pins.push(pin);
    }
  }

  public selectPin(event): void {
    let lat = event.latitude;
    let lng = event.longitude;
    this.setCenter(lat,lng);
    this.zoom = 3;
    this._pinDataService.getPin$(lat, lng).subscribe(val => this.selectedPin = val);
  }
  
  private setCenter(lat,long){
    this.lat = lat;
    this.long = long;
  }

  updatePin(pin : Pin){
    this._pinDataService.updatePin$(pin).subscribe();
    const pos = this.pins.findIndex(p => p.id == pin.id);
    this.pins.splice(pos,1,pin);
  }

  deletePin(pin : Pin){
    this._pinDataService.deletePin$(pin).subscribe();
    const pos = this.pins.findIndex(p => p.id == pin.id);
    this.pins.splice(pos,1);
    this.selectedPin = new Pin(0, 0, "Select a pin");
  }

  deletePins(){
    this.pins.forEach(pin => this._pinDataService.deletePin$(pin).subscribe());
    this.pins = new Array<Pin>();

    this.selectedPin = new Pin(0, 0, "Select a pin");
  }

  deleteAllImagesOfPin(pin:Pin){
    this._pinDataService.deleteAllImages$(pin).subscribe();
  }

  removeImage(photo :Photo){
      if(photo.id){
        this._pinDataService.deleteImagePin$(this.selectedPin,photo).subscribe();
      }else{
        console.log(this.selectedPin.id.toString())
        this._pinDataService.getPinById$(this.selectedPin.id).subscribe(val =>{
          console.log(val.toString());
          const pic  : Photo = val.images.find(i => i.src === photo.src);
          this._pinDataService.deleteImagePin$(val,pic).subscribe();
        })
      }
  }
}