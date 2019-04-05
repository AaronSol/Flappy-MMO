function person(name, age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name;
    }
}

var aaron = new person("aaron", 19);
aaron.changeName("soler");
document.write(aaron.name);