
//Animal Crossing Fish and Bug Helper
// Run in server import {fish} from './objects.js';

//Copy of Object.js=============================================================
class Animal {
    months = [];
    name ="-------";
    location="---------";
    price = -1;
    time = "";
    picturePath = "unset";
    allYear = 0;

    constructor(name, months, time, location, price) {
      this.name = name;
      this.months = months;
      this.location = location;
      this.price = price;
      this.time = time;
    }

    getMonths(hemisphere){
        if (hemisphere == 1){
            return this.months[0];
        }
        else if (hemisphere == 2){
            return this.months[1];
        }
        else if (hemisphere ==3){
            temp = []
            temp = temp.concat(this.months[0],this.months[1]);
            return Array.from(new Set(temp));   //remove duplcates, return to array
        }
        else{
            return "Invalid hemisphere request";
        }
    }

    getName(){
        return this.name;
    }

    getLocation(){
        return this.location;
    }
    getPrice(){
        return this.price;
    }
    getTime(){
        return this.time;
    }

    setPicturePath(path){
        this.picturePath = path;
        return;
    }

    getPicturePath(){
        return this.picturePath;
    }

    setAllYear(){
        this.allYear = 1;
        return;
    }

    getAllYear(){
        return this.allYear;
    }

}

class Fish extends Animal{
    size = 0;
    constructor(name, size, price, months, time, location){
        super(name,months, time, location, price);
        this.size=size;
    }
    getSize(){
        return this.size;
    }
}

class Bug extends Animal{
    constructor(name, price, months, time, location){
        super(name,months, time, location, price);
    }
}

//Fish---------------------------------
fish = [];
function loadFish(){
    //a = all day
    //n = night/evening
    //m = morning/afternoon

    r = "River";
    p = "Pond";
    rc = "River (Clifftop)";
    sp = " ";
    rm = "River (Mouth)";
    s = "Sea";
    pr = "Pier";
    sr = "Sea (Raining)";

    fullYear = [[-3],[-3]]

    /*"j","f","mr","ap","ma","jn",
    "jl","au","s","o","n","d" */

    temp = new Fish("Bitterling",1,900,
    [[1,2,3,11,12],[5,6,7,8,9]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    a = new Fish("Pale Chub",1,200, fullYear, "m",r);
    a.setAllYear();
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129"); 
    fish.push(a);

    a = new Fish("Crusian Carp",2,160, fullYear, "a",r);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest?cb=20200401003129");
    a.setAllYear(); 
    fish.push(a);

    a = new Fish("Dace",3,240, fullYear, "m",r);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest?cb=20200401003129");
    a.setAllYear(); 
    fish.push(a);

    a = new Fish("Carp",4,300, fullYear, "a",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish("Koi",4,4000, fullYear, "n",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish("Goldfish",1,1300, fullYear, "a",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish("Pop-Eyed Goldfish",1,1300, fullYear, "m",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish("Randchu Goldfish",2,4500, fullYear, "m",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    temp = new Fish("Killifish",1,300,
    [[4,5,6,7,8],[1,2,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-killifish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Crawfish",2,200,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-crawfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Soft-Shelled Turtle",4,3750,
    [[8,9],[2,3]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-softshelledturtle.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Snapping Turtle",5,5000,
    [[4,5,6,7,8,9,10],[1,2,3,4,10,11,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-snappingturtle.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Tadpole",1,100,
    [[3,4,5,6,7],[1,9,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-tadpole.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Frog",2,120,
    [[5,6,7,8],[1,2,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/NH-Icon-frog.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Freshwater Goby",2,400, fullYear, "n",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ee/NH-Icon-freshwatergoby.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Loach",2,400,
    [[3,4,5],[9,10,11]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/77/NH-Icon-loach.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Catfish",4,800,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "n",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/29/NH-Icon-catfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Giant Snakehead",5,5500,
    [[6,7,8],[1,2,12]], "m",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-giantsnakehead.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Bluegill",2,180, fullYear, "n",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/69/NH-Icon-bluegill.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Yellow Perch",3,300,
    [[1,2,3,10,11,12],[4,5,6,7,8,9]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1d/NH-Icon-yellowperch.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Black Bass",4,400, fullYear, "a",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-blackbass.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Tilapia",3,800,
    [[6,7,8],[1,2,3,4,12]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/53/NH-Icon-tilapia.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Pike",5,1800,
    [[9,10,11,12],[3,4,5,6]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-pike.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Pond Smelt",2,500,
    [[1,2,12],[6,7,8]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/NH-Icon-pondsmelt.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Sweetfish",3,900,
    [[7,8,9],[1,2,3]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/40/NH-Icon-sweetfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Cherry Salmon",3,1000,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11,12]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5f/NH-Icon-cherrysalmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Char",3,3800,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11,12]], "n",rc+sp+p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/15/NH-Icon-char.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Golden Trout",3,15000,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5c/NH-Icon-goldentrout.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Stringfish",5,15000,
    [[1,2,3,12],[6,7,8,9]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-stringfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Salmon",4,700,
    [[9],[3]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fb/NH-Icon-salmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("King Salmon",6,1800,
    [[9],[3]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fd/NH-Icon-kingsalmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Mitten Crab",2,2000,
    [[9,10,11],[3,4,5]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-mittencrab.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Guppy",1,1300,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-guppy.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Nibble Fish",1,1500,
    [[5,6,7,8,9],[1,2,3,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/89/NH-Icon-nibblefish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Angelfish",2,3000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-angelfish.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish("Betta",2,2500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-betta.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Neon Tetra",1,500,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/da/NH-Icon-neontetra.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Rainbowfish",1,800,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Icon-rainbowfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Piranha",2,2500,
    [[6,7,8,9],[1,2,3,12]], "special:9am-4pm,9pm-4am",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-piranha.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Arowana",4,10000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/bf/NH-Icon-arowana.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish("Dorado",5,15000,
    [[6,7,8,9],[1,2,3,12]], "special:4am-9pm",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/df/NH-Icon-dorado.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Gar",6,6000,
    [[6,7,8,9],[1,2,3,12]], "n",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9f/NH-Icon-gar.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Arapaima",6,10000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-arapaima.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish("Saddled Bichir",4,4000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/a0/NH-Icon-saddledbichir.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Sturgeon",6,10000,
    [[1,2,3,9,10,11,12],[3,4,5,6,7,8,9]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/98/NH-Icon-sturgeon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Sea Butterfly",1,1000,
    [[1,2,3,12],[6,7,8,9]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-seabutterfly.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Sea Horse",1,1100,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-seahorse.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Clown Fish",1,6500,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-clownfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Surgeonfish",2,1000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/11/NH-Icon-surgeonfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Butterfly Fish",2,1000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/NH-Icon-butterflyfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Naploenfish",6,10000,
    [[7,8],[1,2]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6f/NH-Icon-napoleonfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Zebra Turkeyfish",3,500,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-zebraturkeyfish.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Blowfish",3,5000,
    [[1,2,11,12],[5,6,7,8]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/39/NH-Icon-blowfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Pufferfish",3,250,
    [[7,8,9],[1,2,3]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1f/NH-Icon-pufferfish.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Anchovy",2,200, fullYear, "special:4am-9pm",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-anchovy.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Horse Mackerel",2,150, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/d5/NH-Icon-horsemackerel.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Barred Knifejaw",3,5000,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/NH-Icon-barredknifejaw.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish("Sea Bass",5,400, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-seabass.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Red Snapper",4,3000, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-redsnapper.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Dab",3,300,
    [[1,2,3,4,10,11,12],[4,5,6,7,8,9,10]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c6/NH-Icon-dab.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Olive Flounder",5,800, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-oliveflounder.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Squid",3,500,
    [[1,2,3,4,5,6,7,8,12],[1,2,6,7,8,9,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/NH-Icon-squid.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Moray Eel","Narrow",2000,
    [[8,9,10],[2,3,4]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Icon-morayeel.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish("Ribbon Eel","Narrow",600,
    [[6,7,8,9,10],[1,2,3,4,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ac/NH-Icon-ribboneel.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Tuna",6,7000,
    [[1,2,3,4,11,12],[5,6,7,8,9,10]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/50/NH-Icon-tuna.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Blue Marlin",6,10000,
    [[1,2,3,4,7,8,9,11,12],[1,2,3,4,5,6,7,8,9,10]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-bluemarlin.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Giant Trevally",5,4500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-gianttrevally.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Mahi-Mahi",5,6000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-mahimahi.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Ocean Sunfish","6(Fin)",4000,
    [[7,8,9],[1,2,3]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Icon-oceansunfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Ray",5,3000,
    [[8,9,10,11],[2,3,4,5]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Saw Shark","6(Fin)",12000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Icon-sawshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Hammerhead Shark","6(Fin)",8000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-hammerheadshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Great White Shark","6(Fin)",15000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/38/NH-Icon-greatwhiteshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Whale Shark","6(Fin)",13000,
    [[6,7,8,9],[1,2,3,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-whaleshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Suckerfish","4(Fin)",1500,
    [[6,7,8,9],[1,2,3,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-suckerfish.png/revision/latest?cb=20200401003131");
    fish.push(temp);

    temp = new Fish("Football Fish",4,2500,
    [[1,2,3,11,12],[5,6,7,8,9]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Icon-footballfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Oarfish",4,9000,
    [[1,2,3,4,5,12],[6,7,8,9,10,11]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Icon-oarfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish("Barreleye",2,15000, fullYear, "special:9pm-4am",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-barreleye.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish("Coelacanth",6,15000, fullYear, "a",sr);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/31/NH-Icon-coelacanth.png/revision/latest?cb=20200401003129");
    fish.push(temp);

}
//Bugs--------------------------------
bugs = [];
function loadBugs(){

    fullYear = [[-3],[-3]]
    f="Flying";
    fh="Flying by Hybrid Flowers";
    fl="Flying by Light";
    ot="On Trees";
    g="On the Ground";
    flow="On Flowers";
    orchid="On White Flowers";
    st="Shaking Trees";
    u="Underground";
    par="On Ponds and Rivers";
    ots="On Tree Stumps";
    grs="On the Ground rolling Snowballs";
    otcs="On Coconut Tree Stumps";
    otc="On Coconut Trees";
    utd="Under Trees Disguised as Leafs";
    rf="On Rotten Food";
    bds="On the Beach disguised as Shells";
    br="On Beach Rocks";
    oti="On dropped Trash Items";
    vh="On Itchy Villager's heads";
    rab="On Rocks and Bushes (In the Rain)";
    hr="Hitting Rocks";

    //mm = "4am-7pm";
    //a= "All Day";

    temp = new Bug("Common Butterfly",160,
    [[1,2,3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Yellow Butterfly",160,
    [[3,4,5,6,9,10],[3,4,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Tiger Butterfly",240,
    [[3,4,5,6,7,8,9],[1,2,3,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Peacock Butterfly",2500,
    [[3,4,5,6],[9,10,11,12]], "mm",fh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Common Bluebottle",300,
    [[4,5,6,7,8],[1,2,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Paper Kite Butterfly",1000,
    fullYear, "8am-7pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest?cb=20200401005429");
    temp.setAllYear(); 
    bugs.push(temp);

    temp = new Bug("Great Purple Emperor",3000,
    [[5,6,7,8],[1,2,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Monarch Butterfly",140,
    [[9,10,11],[3,4,5]], "4am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Emperor Butterfly",4000,
    [[1,2,3,6,7,8,9,12],[1,2,3,6,7,8,9,12]], "5pm-8am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Agrias Butterfly",3000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Rajah Brooke's Birdwing",2500,
    [[1,2,4,5,6,7,8,9,12],[1,2,3,6,7,8,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Queen Alexandra's Birdwing",4000,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-4pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug("Moth",130, fullYear, "7pm-4am",fl);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Atlas Moth",3000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "7pm-4am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Madagascan Sunset Moth",2500,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "8am-4pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Long Locust",200,
    [[4,5,6,7,8,9,10,11],[1,2,3,,4,5,10,11,12]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Migratory Locust",600,
    [[8,9,10,11],[2,3,4,5]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Rice Grasshopper",160,
    [[8,9,10,11],[2,3,4,5]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Grasshopper",160,
    [[7,8,9],[1,2,3]], "8am-5pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Cricket",130,
    [[9,10,11],[3,4,5]], "5pm-8am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Bell Cricket",430,
    [[9,10],[3,4]], "5pm-8am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Mantis",430,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "8am-5pm",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Orchid Mantis",2400,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "8am-5pm",orchid);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Honeybee",200,
    [[3,4,5,6,7],[1,9,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    a = new Bug("Wasp",2500, fullYear, "a",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Brown Cicada",250,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Robust Cicada",300,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Giant Cicada",500,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Walker Cicada",400,
    [[8,9],[2,3]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Evening Cicada",550,
    [[7,8],[1,2]], "8am-5pm and 4pm-7pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Cicada Shell",10,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Red Dragonfly",180,
    [[9,10],[3,4]], "8am-7pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Darner Dragonfly",230,
    [[4,5,6,7,8,9,10],[1,2,3,4,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Banded Dragonfly",4500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Damselfly",500,
    [[1,2,11,12],[5,6,7,8]], "a",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Firefly",300,
    [[6],[12]], "7pm-4am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Mole Cricket",500,
    [[1,2,3,4,5,11,12],[5,6,7,8,9,10,11]], "a",u);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Pond Skater",130,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-7pm",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Diving Beetle",800,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-7pm",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Giant Water Bug",2000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "7pm-8am",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Stinkbug",120,
    [[3,4,5,6,7,8,9,10],[1,2,3,4,9,10,11,12]], "a",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Man-Faced Stink Bug",1000,
    [[3,4,5,6,7,8,9,10],[1,2,3,4,9,10,11,12]], "7pm-8am",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Ladybug",200,
    [[3,4,5,6,10],[4,9,10,11,12]], "8am-5pm",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Tiger Beetle",1500,
    [[2,3,4,5,6,7,8,9,10],[1,2,3,4,8,9,10,11,12]], "a",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Jewel Beetle",2400,
    [[4,5,6,7,8],[1,2,10,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Violin Beetle",450,
    [[5,6,9,10,11],[3,4,5,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug("Citrus Long-Horned Beetle",350, fullYear, "a",ots);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Rosalia Batesi Beetle",3000,
    [[5,6,7,8,9],[1,2,3,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Blue Weevil Beetle",800,
    [[7,8],[1,2,3,11,12]], "a",otcs);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Dung Beetle",3000,
    [[1,2,12],[6,7,8]], "a",grs);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest?cb=20200401005431");
    bugs.push(temp);

    temp = new Bug("Earth-Boring Dung Beetle",300,
    [[7,8,9],[1,2,3]], "a",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Scarab Beetle",10000,
    [[7,8],[1,2]], "11pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Drone Beetle",200,
    [[6,7,8],[1,2,12]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Goliath Beetle",8000,
    [[6,7,8,9],[1,2,3,12]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Saw Stag",2000,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Miyama Stag",1000,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Giant Stag",10000,
    [[7,8],[1,2]], "11pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Rainbow Stag",6000,
    [[6,7,8,9],[1,2,12]], "7pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Cyclommatus Stag",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Golden Stag",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Giraffe Stag",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Horned Dynastid",1350,
    [[7,8],[1,2]], "5pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Horned Atlas",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Horned Elephant",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Horned Hercules",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Walking Stick",600,
    [[7,8,9,10,11],[1,2,3,4,5]], "4am-8am & 5pm-7pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest?cb=20200401005428");
    bugs.push(temp);
    
    temp = new Bug("Walking Leaf",600,
    [[7,8,9],[1,2,3]], "a",utd);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug("Bagworm",600, fullYear, "a",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug("Ant",80, fullYear, "a",'On Rotten Turnips');
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug("Hermit Crab",1000, fullYear, "7pm-8am",bds);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest?cb=20200401005430");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug("Wharf Roach",200, fullYear, "a",br);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug("Fly",60, fullYear, "a",oti);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Mosquito",130,
    [[6,7,8,9],[1,2,3,12]], "5pm-4am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Flea",70,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    a = new Bug("Snail",250, fullYear, "a",rab);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest?cb=20200401005429");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Pill Bug",250,
    [[3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "11pm-4pm",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug("Centipede",300,
    [[3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "4pm-11pm",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug("Spider",600, fullYear, "7pm-8am",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest?cb=20200401005429");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug("Tarantula",8000,
    [[1,2,3,4,11,12],[5,6,7,8,9,10]], "7pm-4am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug("Scorpion",8000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "7pm-4am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

}
/*1,2,3,4,5,6,7,8,9,10,11,12 */
//=====================================================================

//Month Selection
var selectedMonth =""; //text
var monthsf = [ "j","f","mr","ap","ma","jn",
                "jl","au","s","o","n","d" 
]
var monthStrings = [
    "January", "Feburary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
//default = January is true
var month_display_check = [true,false,false,false,false,false,false,false,false,false,false,false];

function setupMonthsDisplay(){
    var month_output ="";
    length = month_display_check.length;
    for (var i = 0; i < length; i++) {
        if (month_display_check[i] ==  true){
            month_output= month_output +monthStrings[i]+" ";
            string = monthStrings[i].toLowerCase()+"Button";
            document.getElementById(string).className = "button-selected";
        }
 
    }
    document.getElementById("monthOutput").innerHTML = month_output;
}

function toggleMonth(j){    //input as proper months (starting at 1 not zero)
    i = j -1;
    month_display_check[i]=!month_display_check[i];
    setupMonthsDisplay();
    displayResults();
    string = monthStrings[i].toLowerCase()+"Button";
    if (month_display_check[i]==true){
        document.getElementById(string).className = "button-selected";
    }
    else{
        document.getElementById(string).className = "";
    }
    return;
}


//Hemisphere Selection--------------------
var hemisphereSouth=false; //0, do not check   1, check
var hemisphereNorth=true;

function setupHemiDisplay(){
    if(hemisphereNorth==true){
        document.getElementById("northernButton").className = "button-selected";
    }
    else{
        document.getElementById('northernButton').className = "";
    }
    if(hemisphereSouth==true){
        document.getElementById("southernButton").className = "button-selected";
    }
    else{
        document.getElementById('southernButton').className = "";
    }
    document.getElementById("hemiOutput").innerHTML = "Northern: "+hemisphereNorth+", Southern: "+hemisphereSouth;
    return;
}

function selectHemisphere(pick){
    if (pick == 1){
        hemisphereNorth = !hemisphereNorth;
        //mark as unselected visually
        setupHemiDisplay();
        displayResults();
    }
    if(hemisphereNorth==true){
        document.getElementById("northernButton").className = "button-selected";
    }
    else{
        document.getElementById('northernButton').className = "";
    }
    if (pick == 2){
        hemisphereSouth = !hemisphereSouth;
        //mark as unselected visually
        setupHemiDisplay();
        displayResults();
    }
    if(hemisphereSouth==true){
        document.getElementById("southernButton").className = "button-selected";
    }
    else{
        document.getElementById('southernButton').className = "";
    }
    return;
}



//Show Toggles-----------------------------
var fishShow = true;
var bugShow = true;

function setupAnimalDisplay(){
    document.getElementById("toggleOutputs").innerHTML = "Fish: "+fishShow+", Bugs: "+bugShow+"";
    if (fishShow==true){
        document.getElementById("fishToggle").className = "button-selected";
    }
    else{
        document.getElementById('fishToggle').className = "";
    }
    if(bugShow==true){
        document.getElementById("bugToggle").className = "button-selected";
    }
    else{
        document.getElementById('bugToggle').className = "";
    }
    return;
}

function toggleFishDisplay(){
    fishShow = !fishShow;
    //displayResults();
    displayLengthCalc();
    display = "block";
    if (fishShow==false){
        display="none";
    }
    else{
        display="block";
    }
    if (fishShow==true){
        document.getElementById("fishToggle").className = "button-selected";
    }
    else{
        document.getElementById('fishToggle').className = "";
    }
    document.getElementById('fish-table').style.display=display;
    setupAnimalDisplay();
    displayResults();
    return;
}

function toggleBugDisplay(){
    bugShow = !bugShow;
    displayLengthCalc();
    display = "block";
    if (bugShow==false){
        display="none";
    }
    else{
        display="block";
    }
    if(bugShow==true){
        document.getElementById("bugToggle").className = "button-selected";
    }
    else{
        document.getElementById('bugToggle').className = "";
    }
    document.getElementById('bug-table').style.display=display;
    setupAnimalDisplay();
    displayResults();
    return;
}


var tableIndex = 1;
function displayLengthCalc(){
    //console.log(window.innerWidth);
    //console.log((window.innerWidth/130));
    //console.log((window.innerWidth/130)/2);
    //console.log(Math.floor((window.innerWidth/130)/2))
    var split=2;
    if (bugShow==false || fishShow==false){
        split=1;
        document.getElementById("fish-table").style.width = "100%";
        document.getElementById("bug-table").style.width = "100%";
    }
    else{
        document.getElementById("fish-table").style.width = "50%";
        document.getElementById("bug-table").style.width = "50%";
    }
    tableIndex = Math.floor((window.innerWidth/130)/split);
    //displayResults();
    return;
}

//Results
function checkValidFish(i){
    check_month = []
    if ( hemisphereSouth ==true && hemisphereNorth==true ){
        check_month = fish[i].getMonths(3);
    }
    else if(hemisphereSouth == true && hemisphereNorth==false){
        check_month = fish[i].getMonths(2);
    }
    else if(hemisphereNorth == true && hemisphereSouth==false){
        check_month = fish[i].getMonths(1);
    }
    else{
        check_month = "Invalid";
        return false;
    }
    if(fish[i].getAllYear()==1){
        return true;
    }
    var k = 0;
    for(k;k<check_month.length;k++){
        if(month_display_check[check_month[k]-1]==true){
            return true;
        }
    }

    return false;
}

function checkValidBug(i){
    check_month = []
    if ( hemisphereSouth ==true && hemisphereNorth==true ){
        check_month = bugs[i].getMonths(3);
    }
    else if(hemisphereSouth == true && hemisphereNorth==false){
        check_month = bugs[i].getMonths(2);
    }
    else if(hemisphereNorth == true && hemisphereSouth==false){
        check_month = bugs[i].getMonths(1);
    }
    else{
        check_month = "Invalid";
        return false;
    }
    if(bugs[i].getAllYear()==1){
        return true;
    }
    var k = 0;
    for(k;k<check_month.length;k++){
        if(month_display_check[check_month[k]-1]==true){
            return true;
        }
    }
    return false;
}

function displayResults(){
    //console.log(fish.length);
    indexCounter = 0;
    repeats = 1;
    var fish_table = document.getElementById("fish-table");
    if (fishShow==true){
        while (fish_table.firstChild) {
            fish_table.removeChild(fish_table.lastChild);
        }
    }
    var bug_table = document.getElementById("bug-table");
    if(bugShow==true){
        while (bug_table.firstChild) {
            bug_table.removeChild(bug_table.lastChild);
        } 
    }

    if (month_display_check[0]||month_display_check[1]||
        month_display_check[2]||month_display_check[3]||
        month_display_check[4]||month_display_check[5]||
        month_display_check[6]||month_display_check[7]||
        month_display_check[8]||month_display_check[9]||
        month_display_check[10]||month_display_check[11]){
        //Fish
        if(fishShow==true){
            var i = 0;
            var j = 0;
            var divTableRow = document.createElement("div");
            divTableRow.className = "table-row";

            for (i;i<fish.length;i++){
                j = j + 1;
                //console.log(indexCounter);
                //console.log(tableIndex);
                //console.log("-------------------")
                if (indexCounter == tableIndex){
                    indexCounter = 0;
                    fish_table.appendChild(divTableRow);
                    divTableRow = document.createElement("div");
                    divTableRow.className = "table-row";
                }
                if (checkValidFish(i)==true){
                    var divClassBodyCell = document.createElement("div");
                    divClassBodyCell.className = "table-body-cell";
                    //-----------------------------------------------
                    var divIdTableBodyCellI = document.createElement("div");
                    divIdTableBodyCellI.id = "table-body-cell-"+j;
                    divClassBodyCell.appendChild(divIdTableBodyCellI);
                    //---------------------------------
                        var divIdFishImage = document.createElement("div");
                        divIdFishImage.className = "fish-image";
                        divIdTableBodyCellI.appendChild(divIdFishImage);
                            var fishImage = document.createElement("img");
                            fishImage.src = fish[i].getPicturePath();
                            fishImage.id = "fish-"+i+"-image";
                            divIdFishImage.appendChild(fishImage);
                        //--------------------
                        var divIdFishName = document.createElement("div");
                        divIdFishName.className = "fish-name";
                        divIdTableBodyCellI.appendChild(divIdFishName);
                            var fishName = document.createElement("h3");
                            fishName.innerText = fish[i].getName();
                            fishName.id = "fish-"+i+"-name";
                            divIdFishName.appendChild(fishName);
                        //--------------------
                        var divIdFishPrice = document.createElement("div");
                        divIdFishPrice.className = "fish-price";
                        divIdTableBodyCellI.appendChild(divIdFishPrice);
                            var fishPrice = document.createElement("p");
                            fishPrice.innerText = fish[i].getPrice()+ " Bells";
                            fishPrice.id = "fish-"+i+"-price";
                            divIdFishPrice.appendChild(fishPrice);
                        //--------------------
                        var divIdFishLocation = document.createElement("div");
                        divIdFishLocation.className = "fish-location";
                        divIdTableBodyCellI.appendChild(divIdFishLocation);
                            var fishLocation = document.createElement("p");
                            fishLocation.innerText = fish[i].getLocation();
                            fishLocation.id = "fish-"+i+"-location";
                            divIdFishLocation.appendChild(fishLocation);
                        //--------------------
                        var divIdFishSize = document.createElement("div");
                        divIdFishSize.className = "fish-size";
                        divIdTableBodyCellI.appendChild(divIdFishSize);
                            var fishSize = document.createElement("p");
                            fishSize.innerText = "Size: "+fish[i].getSize();
                            fishSize.id = "fish-"+i+"-size";
                            divIdFishLocation.appendChild(fishSize);
                        //--------------------
                        var divIdFishTime = document.createElement("div");
                        divIdFishTime.className = "fish-time";
                        divIdTableBodyCellI.appendChild(divIdFishTime);
                            var fishTime = document.createElement("p");
                            time = fish[i].getTime();
                            if (time == "m"){
                                fishTime.innerText = "9am - 4pm";
                            }
                            else if(time =="a"){
                                fishTime.innerText = "All day";
                            }
                            else if(time=="n"){
                                fishTime.innerText="4pm - 9am";
                            }
                            else{
                                fishTime.innerText=(time.split(":"))[1];
                            }
                            fishTime.id = "fish-"+i+"-time";
                            divIdFishTime.appendChild(fishTime);
                    if(fish[i].getAllYear==1){
                        divClassBodyCell.id = divClassBodyCell.id + " all-year";
                    }
                    divTableRow.appendChild(divClassBodyCell);
                    indexCounter = indexCounter + 1;
                }
                if(divTableRow.childElementCount>0){
                    divTableRow.className="unfinished-row";
                    fish_table.appendChild(divTableRow);
                }
                else{
                    continue;
                }
            }
        }

        //Bugs
        if(bugShow==true){
            var i = 0;
            var j = 0;
            indexCounter = 0;
            var divTableRow = document.createElement("div");
            divTableRow.className = "table-row";
            for (i;i<bugs.length;i++){
                j = j + 1;
                if (indexCounter == tableIndex){
                    indexCounter = 0;
                    bug_table.appendChild(divTableRow);
                    divTableRow = document.createElement("div");
                    divTableRow.className = "table-row";
                }   
                if (checkValidBug(i)==true){
                    var divClassBodyCell = document.createElement("div");
                    divClassBodyCell.className = "table-body-cell";
                    //-----------------------------------------------
                        var divIdTableBodyCellI = document.createElement("div");
                        divIdTableBodyCellI.id = "table-body-cell-"+j;
                        divClassBodyCell.appendChild(divIdTableBodyCellI);
                        //---------------------------------
                            var divIdFishImage = document.createElement("div");
                            divIdFishImage.className = "bug-image";
                            divIdTableBodyCellI.appendChild(divIdFishImage);
                                var fishImage = document.createElement("img");
                                fishImage.src = bugs[i].getPicturePath();
                                fishImage.id = "bug-"+i+"-image";
                                divIdFishImage.appendChild(fishImage);
                            //--------------------
                            var divIdFishName = document.createElement("div");
                            divIdFishName.className = "bug-name";
                            divIdTableBodyCellI.appendChild(divIdFishName);
                                var fishName = document.createElement("h3");
                                fishName.innerText = bugs[i].getName();
                                fishName.id = "bug-"+i+"-name";
                                divIdFishName.appendChild(fishName);
                            //--------------------
                            var divIdFishPrice = document.createElement("div");
                            divIdFishPrice.className = "bug-price";
                            divIdTableBodyCellI.appendChild(divIdFishPrice);
                                var fishPrice = document.createElement("p");
                                fishPrice.innerText = bugs[i].getPrice()+ " Bells";
                                fishPrice.id = "bug-"+i+"-price";
                                divIdFishPrice.appendChild(fishPrice);
                            //--------------------
                            var divIdFishLocation = document.createElement("div");
                            divIdFishLocation.className = "bug-location";
                            divIdTableBodyCellI.appendChild(divIdFishLocation);
                                var fishLocation = document.createElement("p");
                                fishLocation.innerText = bugs[i].getLocation();
                                fishLocation.id = "bug-"+i+"-location";
                                divIdFishLocation.appendChild(fishLocation);
                            //--------------------
                            var divIdFishTime = document.createElement("div");
                            divIdFishTime.className = "bug-time";
                            divIdTableBodyCellI.appendChild(divIdFishTime);
                                var fishTime = document.createElement("p");
                                time = bugs[i].getTime();
                                if (time == "mm"){
                                    fishTime.innerText = "4am-7pm";
                                }
                                else if(time =="a"){
                                    fishTime.innerText = "All day";
                                }
                                else{
                                    fishTime.innerText=bugs[i].getTime();
                                }
                                fishTime.id = "bug-"+i+"-time";
                                divIdFishTime.appendChild(fishTime);
                    if(bugs[i].getAllYear==1){
                        divClassBodyCell.id = divClassBodyCell.id + " all-year";
                    }
                    divTableRow.appendChild(divClassBodyCell);
                    indexCounter = indexCounter + 1;
                }
                if(divTableRow.childElementCount>0){
                    divTableRow.className="unfinished-row";
                    bug_table.appendChild(divTableRow);
                }
                else{
                    continue;
                }
            }
        }
    }
    else{
        return;
    }
}

//Div Layout
/*
                    <div class=“table-body-cell”>
                        <div id="table-body-cell-1">
                            <div class="fish-image">
                                <img id="fish-1-image">
                            </div>
                            <div class="fish-name">
                                <h3 id="fish-1-name">Bitterling</h3>
                            </div>
                            <div class="fish-price">
                                <p id="fish-1-price">900 Bells</p>
                            </div>
                            <div class="fish-location">
                                <p id="fish-1-location">Pond</p>
                            </div>
                            <div class="fish-time">
                                <p id="fish-1-time">4pm-9am</p>
                            </div>
                        </div>
                    </div>
                    */




function setup(){
    displayLengthCalc();
    console.log(tableIndex);
    //console.log(fish.length);
    setupHemiDisplay();
    setupMonthsDisplay();
    setupAnimalDisplay();
    loadFish();
    loadBugs();
    displayResults();
    //console.log(bugs.length);
    return;
}