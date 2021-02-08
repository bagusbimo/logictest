const input = ['a', 'a', 'a', 'b', 'c', 'c', 'b', 'b', 'b', 'd', 'd', 'e', 'e', 'e'];

let obj = input.reduce((res, curr) =>
{
    if (res[curr])
        res[curr].push(curr);
    else
        Object.assign(res, {[curr]: [curr]});

    return res;
}, {});

console.log(obj);