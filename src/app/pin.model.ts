import { Photo } from './photo.model';

export class Pin{

    private _images : Photo[];
    private _id : Number;
    private _animation: String;

    constructor(private _lat:number ,private _long:number,private _name:String = "unknown"){
        this._images = new Array<Photo>();
        this._animation ='null';
    }

    get lat():number{
        return this._lat;
    }
    get long():number{
        return this._long;
    }

    get name():String{
        return this._name;
    }

    set name(val:String){
        this._name = val;
    }
    
    get images():Photo[]{
        return this._images;
    }
    set images(val){
        this._images = val;
    }

    get id():Number{
        return this._id;
    }

    set id(val:Number){
        this._id = val;
    }

    get animation():String{
        return this._animation;
    }

    set animation(val:String){
        this._animation = val;
    }


    static fromJSON(json :any): Pin{
        const pin = new Pin(json.lat,json.long,json.name);
        const images = json.images;
        for(let key in images){
            pin.addImage(Photo.fromJSON(images[key]));
        }
        pin._id = json.id;    
        return pin;
    }

    toString() :String{
      return `PIN -> id:${this._id}, name: ${this._name.toUpperCase()}, coords:[${this._lat},${this._long}]`;  
    }

    toJSON(){
        return {
            lat: this._lat,
            long: this._long,
            name: this._name,
            images: this._images,
            id: this._id
        };
    }

    addImage(img:Photo):void{
        this._images.push(img);
    }

    removeImage(img:Photo):void{
        const pos = this._images.findIndex(i => i.id == img.id);
        this._images.splice(pos,1);
    }

    removeAllImages():void{
        this._images = new Array<Photo>();
    }
}