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
  
  const driveCar = startEngine();
  driveCar
    .then((message) => {
      console.log(message);
      return changeGear(2);
    })
    .then((gearMessage) => {
      console.log(gearMessage);
      return goCar();
    })
    .then((goMessage) => {
      console.log(goMessage);
      return stopCar();
    })
    .then((stopMessage) => {
      console.log(stopMessage);
      return shutdownEngine();
    })
    .then((shutdownMessage) => {
      console.log(shutdownMessage);
    })
    .catch((err) => {
      console.log(err.name, err.message);
    });



// function startEngine(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`Enggineee Starrr... `)
//         },6000)
//     })
// }


// function changeGear (gear){
//     return new Promise(()=>{
//         setTimeout(()=>{
//             resolve(`masukan gigi ${gear} to move a car`)
//         },5000);
//     })  
    
// }

// function goCar (){
//     return new Promise(()=>{
//         setTimeout(()=>{
//             resolve(`Mobil Berjalan`)
//         },4000);
//     })
// }

// function stopCar(){
//     return new Promise(()=>{
//         setTimeout(()=>{
//             resolve(`Mobil Berhenti`)
//         },3000);
//     })
// }

// function shutDownCar (){
//     return new Promise(()=>{
//         setTimeout(()=>{
//             resolve(`Mesin Mobil Dimatian`)
//         },2000);
//     })
// }
  
//   const result = startEngine();
//  result
//     .then((message) => {
//       console.log(message);
//       return changeGear(2);
//     })
//     .then((gearMessage) => {
//       console.log(gearMessage);
//       return goCar();
//     })
//     .then((goMessage) => {
//       console.log(goMessage);
//       return stopCar();
//     })
//     .then((stopMessage) => {
//       console.log(stopMessage);
//       return shutdownEngine();
//     })
//     .then((shutdownMessage) => {
//       console.log(shutdownMessage);
//     })
//     .catch((err) => {
//       console.log(err.name, err.message);
//     });