function climbStairs(n) {
    if (n === 1) return 1
    let arr = []
    arr[1] = 1
    arr[2] = 2

    for(let i =3 ; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2] // so this is base logic when person climb stairs
    }
    return arr[n]
}

climbStairs(6)
//logic 
// person can take either 1 step or 2 steps at a time so whenever person is on 3rd step it will have 2 options to
// reach there
// 1. from 1st step to 3rd step (2 steps)
//2. from 2nd step to 3rd step (1 step)
//which is a[3] = a[1] + a[2]