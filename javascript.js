
//Animal Crossing Fish and Bug Helper
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
    id = null;
    size = 0;
    constructor(id, name, size, price, months, time, location){
        super(name,months, time, location, price);
        this.size=size;
        this.id=id;
    }
    getSize(){
        return this.size;
    }
    getId(){
        return this.id;
    }
}

class Bug extends Animal{
    id = null;
    constructor(id, name, price, months, time, location){
        super(name,months, time, location, price);
        this.id=id;
    }
    getId(){
        return this.id;
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

    temp = new Fish(1,"Bitterling",1,900,
    [[1,2,3,11,12],[5,6,7,8,9]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    a = new Fish(2,"Pale Chub",1,200, fullYear, "m",r);
    a.setAllYear();
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129"); 
    fish.push(a);

    a = new Fish(3,"Crusian Carp",2,160, fullYear, "a",r);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest?cb=20200401003129");
    a.setAllYear(); 
    fish.push(a);

    a = new Fish(4,"Dace",3,240, fullYear, "m",r);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest?cb=20200401003129");
    a.setAllYear(); 
    fish.push(a);

    a = new Fish(5,"Carp",4,300, fullYear, "a",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish(6,"Koi",4,4000, fullYear, "n",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish(7,"Goldfish",1,1300, fullYear, "a",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish(8,"Pop-Eyed Goldfish",1,1300, fullYear, "m",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    a = new Fish(9,"Randchu Goldfish",2,4500, fullYear, "m",p);
    a.setAllYear(); 
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest?cb=20200401003129");
    fish.push(a);

    temp = new Fish(10,"Killifish",1,300,
    [[4,5,6,7,8],[1,2,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-killifish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(11,"Crawfish",2,200,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/cd/NH-Icon-crawfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(12,"Soft-Shelled Turtle",4,3750,
    [[8,9],[2,3]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-softshelledturtle.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(13,"Snapping Turtle",5,5000,
    [[4,5,6,7,8,9,10],[1,2,3,4,10,11,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-snappingturtle.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(14,"Tadpole",1,100,
    [[3,4,5,6,7],[1,9,10,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-tadpole.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(15,"Frog",2,120,
    [[5,6,7,8],[1,2,11,12]], "a",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/NH-Icon-frog.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(16,"Freshwater Goby",2,400, fullYear, "n",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ee/NH-Icon-freshwatergoby.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(17,"Loach",2,400,
    [[3,4,5],[9,10,11]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/77/NH-Icon-loach.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(18,"Catfish",4,800,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "n",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/29/NH-Icon-catfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(19,"Giant Snakehead",5,5500,
    [[6,7,8],[1,2,12]], "m",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-giantsnakehead.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(20,"Bluegill",2,180, fullYear, "n",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/69/NH-Icon-bluegill.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(21,"Yellow Perch",3,300,
    [[1,2,3,10,11,12],[4,5,6,7,8,9]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1d/NH-Icon-yellowperch.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(22,"Black Bass",4,400, fullYear, "a",r);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-blackbass.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(23,"Tilapia",3,800,
    [[6,7,8],[1,2,3,4,12]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/53/NH-Icon-tilapia.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(24,"Pike",5,1800,
    [[9,10,11,12],[3,4,5,6]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-pike.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(25,"Pond Smelt",2,500,
    [[1,2,12],[6,7,8]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/41/NH-Icon-pondsmelt.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(26,"Sweetfish",3,900,
    [[7,8,9],[1,2,3]], "a",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/40/NH-Icon-sweetfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(27,"Cherry Salmon",3,1000,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11,12]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5f/NH-Icon-cherrysalmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(28,"Char",3,3800,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11,12]], "n",rc+sp+p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/15/NH-Icon-char.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(29,"Golden Trout",3,15000,
    [[3,4,5,6,9,10,11],[3,4,5,9,10,11]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5c/NH-Icon-goldentrout.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(30,"Stringfish",5,15000,
    [[1,2,3,12],[6,7,8,9]], "n",rc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-stringfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(31,"Salmon",4,700,
    [[9],[3]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fb/NH-Icon-salmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(32, "King Salmon",6,1800,
    [[9],[3]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fd/NH-Icon-kingsalmon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(33, "Mitten Crab",2,2000,
    [[9,10,11],[3,4,5]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-mittencrab.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(34, "Guppy",1,1300,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-guppy.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(35,"Nibble Fish",1,1500,
    [[5,6,7,8,9],[1,2,3,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/89/NH-Icon-nibblefish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(36,"Angelfish",2,3000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/63/NH-Icon-angelfish.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish(37,"Betta",2,2500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-betta.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(38,"Neon Tetra",1,500,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/da/NH-Icon-neontetra.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(39,"Rainbowfish",1,800,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "m",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/68/NH-Icon-rainbowfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(40,"Piranha",2,2500,
    [[6,7,8,9],[1,2,3,12]], "special:9am-4pm,9pm-4am",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-piranha.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(41,"Arowana",4,10000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/bf/NH-Icon-arowana.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish(42,"Dorado",5,15000,
    [[6,7,8,9],[1,2,3,12]], "special:4am-9pm",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/df/NH-Icon-dorado.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(43,"Gar",6,6000,
    [[6,7,8,9],[1,2,3,12]], "n",p);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9f/NH-Icon-gar.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(44,"Arapaima",6,10000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-arapaima.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish(45,"Saddled Bichir",4,4000,
    [[6,7,8,9],[1,2,3,12]], "n",r);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/a0/NH-Icon-saddledbichir.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(46,"Sturgeon",6,10000,
    [[1,2,3,9,10,11,12],[3,4,5,6,7,8,9]], "a",rm);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/98/NH-Icon-sturgeon.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(47,"Sea Butterfly",1,1000,
    [[1,2,3,12],[6,7,8,9]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-seabutterfly.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(48,"Sea Horse",1,1100,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-seahorse.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(49,"Clown Fish",1,6500,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-clownfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(50,"Surgeonfish",2,1000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/11/NH-Icon-surgeonfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(51,"Butterfly Fish",2,1000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8e/NH-Icon-butterflyfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(52,"Naploenfish",6,10000,
    [[7,8],[1,2]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6f/NH-Icon-napoleonfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(53,"Zebra Turkeyfish",3,500,
    [[4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-zebraturkeyfish.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(54,"Blowfish",3,5000,
    [[1,2,11,12],[5,6,7,8]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/39/NH-Icon-blowfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(55,"Pufferfish",3,250,
    [[7,8,9],[1,2,3]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1f/NH-Icon-pufferfish.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(56,"Anchovy",2,200, fullYear, "special:4am-9pm",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/24/NH-Icon-anchovy.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(57,"Horse Mackerel",2,150, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/d5/NH-Icon-horsemackerel.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(58,"Barred Knifejaw",3,5000,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8c/NH-Icon-barredknifejaw.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish(59,"Sea Bass",5,400, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-seabass.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(60,"Red Snapper",4,3000, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-redsnapper.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(61,"Dab",3,300,
    [[1,2,3,4,10,11,12],[4,5,6,7,8,9,10]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c6/NH-Icon-dab.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(62,"Olive Flounder",5,800, fullYear, "a",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-oliveflounder.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(63,"Squid",3,500,
    [[1,2,3,4,5,6,7,8,12],[1,2,6,7,8,9,10,11,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/3b/NH-Icon-squid.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(64,"Moray Eel","Narrow",2000,
    [[8,9,10],[2,3,4]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Icon-morayeel.png/revision/latest?cb=20200401003130");
    fish.push(temp);

    temp = new Fish(65,"Ribbon Eel","Narrow",600,
    [[6,7,8,9,10],[1,2,3,4,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ac/NH-Icon-ribboneel.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(66,"Tuna",6,7000,
    [[1,2,3,4,11,12],[5,6,7,8,9,10]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/50/NH-Icon-tuna.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(67,"Blue Marlin",6,10000,
    [[1,2,3,4,7,8,9,11,12],[1,2,3,4,5,6,7,8,9,10]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-bluemarlin.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(68,"Giant Trevally",5,4500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7b/NH-Icon-gianttrevally.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(69,"Mahi-Mahi",5,6000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "a",pr);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-mahimahi.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(70,"Ocean Sunfish","6(Fin)",4000,
    [[7,8,9],[1,2,3]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/52/NH-Icon-oceansunfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(71,"Ray",5,3000,
    [[8,9,10,11],[2,3,4,5]], "special:4am-9pm",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(72,"Saw Shark","6(Fin)",12000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Icon-sawshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(73,"Hammerhead Shark","6(Fin)",8000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-hammerheadshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(74,"Great White Shark","6(Fin)",15000,
    [[6,7,8,9],[1,2,3,12]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/38/NH-Icon-greatwhiteshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(75,"Whale Shark","6(Fin)",13000,
    [[6,7,8,9],[1,2,3,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-whaleshark.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(76,"Suckerfish","4(Fin)",1500,
    [[6,7,8,9],[1,2,3,12]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b9/NH-Icon-suckerfish.png/revision/latest?cb=20200401003131");
    fish.push(temp);

    temp = new Fish(77,"Football Fish",4,2500,
    [[1,2,3,11,12],[5,6,7,8,9]], "n",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/a5/NH-Icon-footballfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(78,"Oarfish",4,9000,
    [[1,2,3,4,5,12],[6,7,8,9,10,11]], "a",s);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Icon-oarfish.png/revision/latest?cb=20200401003129");
    fish.push(temp);

    temp = new Fish(79,"Barreleye",2,15000, fullYear, "special:9pm-4am",s);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-barreleye.png/revision/latest?cb=20200401003128");
    fish.push(temp);

    temp = new Fish(80,"Coelacanth",6,15000, fullYear, "a",sr);
    temp.setAllYear(); 
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/31/NH-Icon-coelacanth.png/revision/latest?cb=20200401003129");
    fish.push(temp);
}

/*
loadFish();
fs.writeFile('Fish.txt', JSON.stringify(fish), (err)=>{
    if(err)throw err;
})*/

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

    temp = new Bug(1,"Common Butterfly",160,
    [[1,2,3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(2,"Yellow Butterfly",160,
    [[3,4,5,6,9,10],[3,4,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(3,"Tiger Butterfly",240,
    [[3,4,5,6,7,8,9],[1,2,3,9,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(4,"Peacock Butterfly",2500,
    [[3,4,5,6],[9,10,11,12]], "mm",fh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(5,"Common Bluebottle",300,
    [[4,5,6,7,8],[1,2,10,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(6,"Paper Kite Butterfly",1000,
    fullYear, "8am-7pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest?cb=20200401005429");
    temp.setAllYear(); 
    bugs.push(temp);

    temp = new Bug(7,"Great Purple Emperor",3000,
    [[5,6,7,8],[1,2,11,12]], "mm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(8,"Monarch Butterfly",140,
    [[9,10,11],[3,4,5]], "4am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(9,"Emperor Butterfly",4000,
    [[1,2,3,6,7,8,9,12],[1,2,3,6,7,8,9,12]], "5pm-8am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(10,"Agrias Butterfly",3000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(11,"Rajah Brooke's Birdwing",2500,
    [[1,2,4,5,6,7,8,9,12],[1,2,3,6,7,8,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(12,"Queen Alexandra's Birdwing",4000,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-4pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug(13,"Moth",130, fullYear, "7pm-4am",fl);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(14,"Atlas Moth",3000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "7pm-4am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(15,"Madagascan Sunset Moth",2500,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "8am-4pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(16,"Long Locust",200,
    [[4,5,6,7,8,9,10,11],[1,2,3,,4,5,10,11,12]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(17,"Migratory Locust",600,
    [[8,9,10,11],[2,3,4,5]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(18,"Rice Grasshopper",160,
    [[8,9,10,11],[2,3,4,5]], "8am-7pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(19,"Grasshopper",160,
    [[7,8,9],[1,2,3]], "8am-5pm",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(20,"Cricket",130,
    [[9,10,11],[3,4,5]], "5pm-8am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(21,"Bell Cricket",430,
    [[9,10],[3,4]], "5pm-8am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(22,"Mantis",430,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "8am-5pm",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(23,"Orchid Mantis",2400,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,9,10,11,12]], "8am-5pm",orchid);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(24,"Honeybee",200,
    [[3,4,5,6,7],[1,9,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    a = new Bug(25,"Wasp",2500, fullYear, "a",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(26,"Brown Cicada",250,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(27,"Robust Cicada",300,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(28,"Giant Cicada",500,
    [[7,8],[1,2]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(29,"Walker Cicada",400,
    [[8,9],[2,3]], "8am-5pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(30,"Evening Cicada",550,
    [[7,8],[1,2]], "8am-5pm and 4pm-7pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(31,"Cicada Shell",10,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(32,"Red Dragonfly",180,
    [[9,10],[3,4]], "8am-7pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(33,"Darner Dragonfly",230,
    [[4,5,6,7,8,9,10],[1,2,3,4,10,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(34,"Banded Dragonfly",4500,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "8am-5pm",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(35,"Damselfly",500,
    [[1,2,11,12],[5,6,7,8]], "a",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(36,"Firefly",300,
    [[6],[12]], "7pm-4am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(37,"Mole Cricket",500,
    [[1,2,3,4,5,11,12],[5,6,7,8,9,10,11]], "a",u);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(38,"Pond Skater",130,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-7pm",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(39,"Diving Beetle",800,
    [[5,6,7,8,9],[1,2,3,11,12]], "8am-7pm",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(40,"Giant Water Bug",2000,
    [[4,5,6,7,8,9],[1,2,3,10,11,12]], "7pm-8am",par);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(41,"Stinkbug",120,
    [[3,4,5,6,7,8,9,10],[1,2,3,4,9,10,11,12]], "a",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(42,"Man-Faced Stink Bug",1000,
    [[3,4,5,6,7,8,9,10],[1,2,3,4,9,10,11,12]], "7pm-8am",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(43,"Ladybug",200,
    [[3,4,5,6,10],[4,9,10,11,12]], "8am-5pm",flow);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(44,"Tiger Beetle",1500,
    [[2,3,4,5,6,7,8,9,10],[1,2,3,4,8,9,10,11,12]], "a",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(45,"Jewel Beetle",2400,
    [[4,5,6,7,8],[1,2,10,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(46,"Violin Beetle",450,
    [[5,6,9,10,11],[3,4,5,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug(47,"Citrus Long-Horned Beetle",350, fullYear, "a",ots);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(48,"Rosalia Batesi Beetle",3000,
    [[5,6,7,8,9],[1,2,3,11,12]], "a",ots);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(49,"Blue Weevil Beetle",800,
    [[7,8],[1,2,3,11,12]], "a",otcs);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(50,"Dung Beetle",3000,
    [[1,2,12],[6,7,8]], "a",grs);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest?cb=20200401005431");
    bugs.push(temp);

    temp = new Bug(51,"Earth-Boring Dung Beetle",300,
    [[7,8,9],[1,2,3]], "a",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(52,"Scarab Beetle",10000,
    [[7,8],[1,2]], "11pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(53,"Drone Beetle",200,
    [[6,7,8],[1,2,12]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(54,"Goliath Beetle",8000,
    [[6,7,8,9],[1,2,3,12]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(55,"Saw Stag",2000,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(56,"Miyama Stag",1000,
    [[7,8],[1,2]], "a",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(57,"Giant Stag",10000,
    [[7,8],[1,2]], "11pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(58,"Rainbow Stag",6000,
    [[6,7,8,9],[1,2,12]], "7pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(59,"Cyclommatus Stag",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(60,"Golden Stag",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(61,"Giraffe Stag",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(62,"Horned Dynastid",1350,
    [[7,8],[1,2]], "5pm-8am",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(63,"Horned Atlas",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(64,"Horned Elephant",8000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(65,"Horned Hercules",12000,
    [[7,8],[1,2]], "5pm-8am",otc);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(66,"Walking Stick",600,
    [[7,8,9,10,11],[1,2,3,4,5]], "4am-8am & 5pm-7pm",ot);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest?cb=20200401005428");
    bugs.push(temp);
    
    temp = new Bug(67,"Walking Leaf",600,
    [[7,8,9],[1,2,3]], "a",utd);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug(68,"Bagworm",600, fullYear, "a",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug(69,"Ant",80, fullYear, "a",'On Rotten Turnips');
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug(70,"Hermit Crab",1000, fullYear, "7pm-8am",bds);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest?cb=20200401005430");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug(71,"Wharf Roach",200, fullYear, "a",br);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    a = new Bug(72,"Fly",60, fullYear, "a",oti);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest?cb=20200401005428");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(73,"Mosquito",130,
    [[6,7,8,9],[1,2,3,12]], "5pm-4am",f);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(74,"Flea",70,
    [[3,4,5,6,7,8,9,10,11],[1,2,3,4,5,10,11,12]], "a",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    a = new Bug(75,"Snail",250, fullYear, "a",rab);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest?cb=20200401005429");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(76,"Pill Bug",250,
    [[3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "11pm-4pm",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest?cb=20200401005428");
    bugs.push(temp);

    temp = new Bug(77,"Centipede",300,
    [[3,4,5,6,9,10,11,12],[3,4,5,6,7,8,9,10,11,12]], "4pm-11pm",vh);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    a = new Bug(78,"Spider",600, fullYear, "7pm-8am",st);
    a.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest?cb=20200401005429");
    a.setAllYear(); 
    bugs.push(a);

    temp = new Bug(79,"Tarantula",8000,
    [[1,2,3,4,11,12],[5,6,7,8,9,10]], "7pm-4am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest?cb=20200401005429");
    bugs.push(temp);

    temp = new Bug(80,"Scorpion",8000,
    [[5,6,7,8,9,10],[1,2,3,4,11,12]], "7pm-4am",g);
    temp.setPicturePath("https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest?cb=20200401005429");
    bugs.push(temp);
}
/*1,2,3,4,5,6,7,8,9,10,11,12 */
//=====================================================================

/*
loadBugs();
fs.writeFile('Bugs.txt', JSON.stringify(bugs), (err)=>{
    if(err)throw err;
})//*/

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
var month_display_check = [false,false,false,false,false,false,false,false,false,false,false,false];

let obj = {}
function change(){
    obj.monthsActive = month_display_check;
    obj.bugShow = bugShow;
    obj.fishShow = fishShow;
    obj.hemisphereNorth = hemisphereNorth;
    obj.hemisphereSouth = hemisphereSouth;
    console.log(obj);
}

function initialMonthsDisplay(){
    let date = new Date();
    let monthValue = date.getMonth();   

    month_display_check[monthValue] = true;
    var month_output ="";
    month_output = month_output +monthStrings[monthValue]+" ";
    string = monthStrings[monthValue].toLowerCase()+"Button";
    document.getElementById(string).className = "button-selected";
    document.getElementById("monthOutput").innerHTML = month_output;
}

function setupMonthsDisplay(){
    var month_output =""; //
    length = month_display_check.length;
    for (var i = 0; i < length; i++) {
        if (month_display_check[i] ==  true){
            month_output= month_output +monthStrings[i]+" "; //
            string = monthStrings[i].toLowerCase()+"Button"; 
            document.getElementById(string).className = "button-selected";
        }
 
    }
    document.getElementById("monthOutput").innerHTML = month_output;
}

function toggleMonth(j){    //input as proper months (starting at 1 not zero)
    i = j -1;
    month_display_check[i]=!month_display_check[i];
    setupMonthsDisplay(); //in order... really here in future can just toggle the className here
    displayResults();
    string = monthStrings[i].toLowerCase()+"Button";
    //as stated above
    if (month_display_check[i]==true){
        document.getElementById(string).className = "button-selected";
    }
    else{
        document.getElementById(string).className = "";
    }
    change();
    return;
}


//Hemisphere Selection--------------------
var hemisphereSouth=false; //0, do not check   1, check
var hemisphereNorth=true;

function updateHemiDisplay(){
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
    document.getElementById("hemiOutput").innerHTML = "Northern: "+hemisphereNorth+", Southern: "+hemisphereSouth; //
    return;
}

function selectHemisphere(pick){
    if (pick == 1){
        hemisphereNorth = !hemisphereNorth;
        //mark as unselected visually
        updateHemiDisplay();
        displayResults();
    }

    //below may be redundant
    if(hemisphereNorth==true){
        document.getElementById("northernButton").className = "button-selected";
    }
    else{
        document.getElementById('northernButton').className = "";
    }//

    if (pick == 2){
        hemisphereSouth = !hemisphereSouth;
        //mark as unselected visually
        updateHemiDisplay();
        displayResults();
    }
    if(hemisphereSouth==true){
        document.getElementById("southernButton").className = "button-selected";
    }
    else{
        document.getElementById('southernButton').className = "";
    }
    change();
    return;
}




//Show Toggles-----------------------------
var fishShow = true;
var bugShow = true;

function updateAnimalDisplay(){
    document.getElementById("toggleOutputs").innerHTML = "Fish: "+fishShow+", Bugs: "+bugShow+""; //
    let fishButton = document.getElementById("fishToggle");
    if (fishShow==true){
        fishButton.className = "button-selected";
        fishButton.innerHTML = "Show Fish";
    }
    else{
        fishButton.className = "";
        fishButton.innerHTML = "Hide Fish";
    }
    let bugButton = document.getElementById('bugToggle');
    if(bugShow==true){
        bugButton.className = "button-selected";
        bugButton.innerHTML = "Show Bugs";
    }
    else{
        bugButton.className = "";
        bugButton.innerHTML = "Hide Bugs";
    }
    return;
}

function toggleFishDisplay(){
    fishShow = !fishShow;
    display = "block";
    if (fishShow==false){ display="none";}
    else{   display="block"; }
    document.getElementById('fish-table').style.display=display;

    updateAnimalDisplay();
    displayLengthCalc();
    displayResults();
    change(); //
    return;
}

function toggleBugDisplay(){
    bugShow = !bugShow;
    display = "block";
    if (bugShow==false){
        display="none";
    }
    else{
        display="block";
    }
    document.getElementById('bug-table').style.display=display;

    updateAnimalDisplay();
    displayLengthCalc();
    displayResults();
    change(); //
    return;
}

var tableSectionsAvaliable = 1;
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
    tableSectionsAvaliable = Math.floor((window.innerWidth/130)/split);
    return;
}

//Results
function checkValidFish(i){

    if(fish[i]["allYear"]==1){
        return true;
    }
    let check_month = [];
    if ( hemisphereSouth ==true && hemisphereNorth==true ){
        //check_month = fish[i].getMonths(3);
        temp = []
        temp = temp.concat(fish[i]["months"][0],fish[i]["months"][1]);
        check_month = Array.from(new Set(temp));   //remove duplcates, return to array
    }
    else if(hemisphereSouth == true && hemisphereNorth==false){
        check_month = fish[i]["months"][1];
    }
    else if(hemisphereNorth == true && hemisphereSouth==false){
        check_month = fish[i]["months"][0];
    }
    else{
        check_month = "Invalid";
        return false;
    }
    //var k = 0;
    for(let k = 0; k<check_month.length; k++){
        if(month_display_check[check_month[k]-1]==true){
            return true;
        }
    }
    return false;
}

function checkValidBug(i){

    if(bugs[i]["allYear"]==1){
        return true;
    }

    let check_month = [];
    if ( hemisphereSouth ==true && hemisphereNorth==true ){
        //check_month = bugs[i].getMonths(3);
        temp = []
        temp = temp.concat(bugs[i]["months"][0],bugs[i]["months"][1]);
        check_month = Array.from(new Set(temp));   //remove duplcates, return to array
    }
    else if(hemisphereSouth == true && hemisphereNorth==false){
        check_month = bugs[i]["months"][1];
    }
    else if(hemisphereNorth == true && hemisphereSouth==false){
        check_month = bugs[i]["months"][0];
    }
    else{
        check_month = "Invalid";
        return false;
    }
    for(let k = 0; k<check_month.length; k++){
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

    //remove all from table
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
                if (indexCounter == tableSectionsAvaliable){ //won't run first time? run on repeats, make a new row
                    //console.log("DO I ever Run?");
                    indexCounter = 0;
                    divTableRow.className = "complete-row";
                    fish_table.appendChild(divTableRow);
                    //new fresh row for future
                    divTableRow = document.createElement("div");
                    divTableRow.className = "unfinished-row";
                } //may be redudant
                if (checkValidFish(i)==true){
                    j = j + 1; 
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
                            fishImage.src = fish[i]["picturePath"];
                            fishImage.id = "fish-"+i+"-image";
                            divIdFishImage.appendChild(fishImage);
                        //--------------------
                        var divIdFishName = document.createElement("div");
                        divIdFishName.className = "fish-name";
                        divIdTableBodyCellI.appendChild(divIdFishName);
                            var fishName = document.createElement("h3");
                            fishName.innerText = fish[i]["name"];
                            fishName.id = "fish-"+i+"-name";
                            divIdFishName.appendChild(fishName);
                        //--------------------
                        var divIdFishPrice = document.createElement("div");
                        divIdFishPrice.className = "fish-price";
                        divIdTableBodyCellI.appendChild(divIdFishPrice);
                            var fishPrice = document.createElement("p");
                            fishPrice.innerText = fish[i]["price"]+ " Bells";
                            fishPrice.id = "fish-"+i+"-price";
                            divIdFishPrice.appendChild(fishPrice);
                        //--------------------
                        var divIdFishLocation = document.createElement("div");
                        divIdFishLocation.className = "fish-location";
                        divIdTableBodyCellI.appendChild(divIdFishLocation);
                            var fishLocation = document.createElement("p");
                            fishLocation.innerText = fish[i]["location"];
                            fishLocation.id = "fish-"+i+"-location";
                            divIdFishLocation.appendChild(fishLocation);
                        //--------------------
                        var divIdFishSize = document.createElement("div");
                        divIdFishSize.className = "fish-size";
                        divIdTableBodyCellI.appendChild(divIdFishSize);
                            var fishSize = document.createElement("p");
                            fishSize.innerText = "Size: "+fish[i]["size"];
                            fishSize.id = "fish-"+i+"-size";
                            divIdFishLocation.appendChild(fishSize);
                        //--------------------
                        var divIdFishTime = document.createElement("div");
                        divIdFishTime.className = "fish-time";
                        divIdTableBodyCellI.appendChild(divIdFishTime);
                            var fishTime = document.createElement("p");
                            time = fish[i]["time"];
                            if (time == "m"){ fishTime.innerText = "9am - 4pm"; }
                            else if(time =="a"){ fishTime.innerText = "All day"; }
                            else if(time =="n"){ fishTime.innerText="4pm - 9am"; }
                            else{ fishTime.innerText=(time.split(":"))[1]; }
                            fishTime.id = "fish-"+i+"-time";
                            divIdFishTime.appendChild(fishTime);
                    if(fish[i]["allYear"]==1){
                        divClassBodyCell.id = divClassBodyCell.id + " all-year";
                    }
                    divTableRow.appendChild(divClassBodyCell);
                    indexCounter = indexCounter + 1;
                }
                if(i == fish.length-1 && divTableRow.childElementCount>0){ //only run on final row, all others should be fillable
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
                if (indexCounter == tableSectionsAvaliable){
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

function setup(){
    loadFish();
    loadBugs();
    //console.log(fish);
    displayLengthCalc();
    updateHemiDisplay();
    initialMonthsDisplay();
    //setupMonthsDisplay();
    updateAnimalDisplay();
    displayResults();
    change();
    return;
}
