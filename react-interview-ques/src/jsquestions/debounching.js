const myDebounce = (func, delay) => {
    let timer 
    
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func(...args)
        },delay)
    }

}

const myThrottle = (func, limit) => { 
    let last = 0
    return function(...args){
        const now = new Date().getTime()
        if(now -last < limit) return
        last = now
        func(...args)
    }  

}