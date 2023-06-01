const outputObject=()=>{
    let result={
        statusRespon: 'oke',
        msg: 'data berhasil dikirim'
    }
    return result
}

console.log(outputObject());
let result = outputObject()
console.log(result);

let (statusRespon,msg)=outputObject()
console.log(statusRespon, msg);