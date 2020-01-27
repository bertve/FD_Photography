export class Photo{
    private _id : Number;

    constructor(private _src:String){

    }
    get src(){
        return this._src;
    }

    get id(){
        return this._id;
    }

    set src(val){
        this._src = val;
    }

    set id(val){
        this._id = val;
    }

    static fromJSON(json :any):Photo{
        const photo = new Photo(json.path);
        photo.id = json.id;
        return photo;
    }

    toJSON(){
        return {
            id: this._id,
            path: this._src,
        };
    }

    toString():string{
        return `IMG -> id: ${this.id},src: ${this._src};`
    }
}