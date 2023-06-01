// const startEngine = ()=>{
//     setTimeout(()=>{
//         console.log(`Enggineee Starrr... `);
//     },6000)
// }


// const changeGear = (gear)=>{
//     setTimeout(()=>{
//         console.log(`masukan gigi ${gear} to move a car`);
//     },5000);
    
// }

// const goCar = ()=>{
//     setTimeout(()=>{
//         console.log(`Mobil Berjalan`);
//     },4000);
    
// }

// const stopCar = ()=>{
//     setTimeout(()=>{
//         console.log(`Mobil Berhenti`);
//     },3000);
    
// }

// const shutDownCar = ()=>{
//     setTimeout(()=>{
//         console.log(`Mesin Mobil Dimatian`);
//     },2000);
    
// }

const startEngine = (gear)=>{
    setTimeout(()=>{
        console.log(`Enggineee Starrr... `);
        setTimeout(()=>{
            console.log(`masukan gigi ${gear} to move a car`);
            setTimeout(()=>{
                console.log(`Mobil Berjalan`);
                setTimeout(()=>{
                    console.log(`Mobil Berhenti`);
                    setTimeout(()=>{
                        console.log(`Mesin Mobil Dimatian`);
                    },1000)
                },2000)
            },3000)
        },4000)
    },5000)
}

startEngine(1);

