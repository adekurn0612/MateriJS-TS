const startEngine = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Engine start...");
      }, 5000);
    });
  };
  
  const changeGear = (gear) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`masukkan gigi ${gear} to move car`);
      }, 4000);
    });
  };
  
  const goCar = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Mobil berjalan");
      }, 3000);
    });
  };
  
  const stopCar = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Mobil berhenti");
      }, 2000);
    });
  };
  
  const shutdownEngine = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Mesin mati");
      }, 1000);
    });
  };
  

  async function driveCar(gear){
    try{
        const no_urut = await startEngine();
        console.log(no_urut);
        const changeG = await changeGear(gear);
        console.log(changeG);
        const goC = await goCar();
        console.log(goC);
        const stopC = await stopCar()
        console.log(stopC);
        const shutdownE = await shutdownEngine();
        console.log(shutdownE);
    }catch(e){
        console.log(e.toString());
    }
}
driveCar(1);