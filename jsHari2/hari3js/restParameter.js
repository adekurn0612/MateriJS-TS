const fnRest =(...arr)=>{
    let str="";
    for(let x of arr){
        str=x+' ';
    }
    console.log(arr.toString());
    console.log(str);
}

const fn=(y,z,...arr)=>{
    let str="";
    for(let x of arr){
    str=x+' ';
    }
    console.log(y,z, str);
}

fn('rest', ' parameter')
fn('rest','parameter',1,2,3,'saya', 'belajar', ' javascript');
fnRest()
fnRest('rest','parameter',1,2,3,'saya', 'belajar', ' javascript');