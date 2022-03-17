// inheritance function constructor

function Car(brand) {
  this.brand = brand;

  this.ride = function() {
    console.log("ride");
  }

  this.stop = function() {
    console.log("stop");
  }

}
  
function Truck(brand) {
  Car.call(this);
  this.test = brand + "10";
}

let truck = new Truck("Kamaz");

// console.log(truck.test);
// truck.ride();
// truck.stop();