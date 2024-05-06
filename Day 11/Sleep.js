/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return prom1 = new Promise ((res)=>{
        setTimeout(() => {
            res(millis);
        }, millis);
    })

}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) 

// Perfectly all cases done