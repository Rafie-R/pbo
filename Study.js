console.log("=== Encapsulation ===");
class Engine {
  #power = 0;

  start() {
    this.#power = 100;
    console.log("Mesin menyala dengan power 100%");
  }

  stop() {
    this.#power = 0;
    console.log("Mesin dimatikan");
  }

  get power() {
    return this.#power;
  }
}

let engine = new Engine();
engine.start();
console.log(`Power saat ini: ${engine.power}%`);
engine.stop();
console.log(`Power saat ini: ${engine.power}%`);

console.log("\n\n=== Composition ===");
class Sensor {
  detect() {
    console.log("Sensor mendeteksi lingkungan...");
  }
}

class Robot {
  constructor(name) {
    this.name = name;
    this.engine = new Engine();
    this.sensor = new Sensor();
  }

  move() {
    console.log(`${this.name} sedang bergerak...`);
  }

  stop() {
    console.log(`${this.name} berhenti.`);
  }
}
let robot = new Robot("Robo1");
robot.engine.start();
robot.sensor.detect();
robot.move();
robot.stop();
robot.engine.stop();

console.log("\n\n=== Inheritance & Polymorphism ===");
class LandRobot extends Robot {
  move() {
    console.log(`${this.name} berjalan di atas tanah.`);
  }
}

class FlyingRobot extends Robot {
  move() {
    console.log(`${this.name} terbang di udara.`);
  }
}
const ribotLand = [new LandRobot("TerraBot"), new FlyingRobot("AeroBot")];
ribotLand.forEach((robot) => {
  robot.move();
});

console.log("\n\n=== Getters and Setters ===");
class SpeedControlledRobot extends Robot {
  #speed = 0;

  set speed(value) {
    if (value < 0) return console.log("Speed tidak boleh negatif!");
    this.#speed = value;
  }

  get speed() {
    return this.#speed;
  }
}

let speedRobot = new SpeedControlledRobot("Speedy");
speedRobot.speed = 50;
console.log(`Kecepatan robot: ${speedRobot.speed} km/jam`);
speedRobot.speed = -10;

console.log("\n\n=== Static ===");
class RobotFactory {
  static createLandRobot(name) {
    console.log("Membuat robot darat baru...");
    return new LandRobot(name);
  }
}

let newLandRobot = RobotFactory.createLandRobot("GroundMaster");
