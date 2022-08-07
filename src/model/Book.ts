class Book {
    id :number| undefined;
    name : string ='';
    price : string ='';
    get isNew():boolean{
        return this.id === undefined;
    }

    constructor(initializer?:any){

        if(!initializer) return;

        this.id = initializer.id;
        this.name = initializer.name;
        this.price = initializer.price;

    }
}

export default Book;