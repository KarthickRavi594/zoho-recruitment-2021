n = parseInt(process.argv[2])
for(let i = 0; i < n ; i++) {
    let initNumber = n
    let output = ""
    let j = i
    let count = 0
    while (j >= 0) {
        output += initNumber.toString() + " "
        initNumber--
        j--
        count++
    }
    for (let k = 0; k < n - count; k++) {
        output += (initNumber + 1).toString() + " "
    }
    console.log(output)
}

/*

How to execute this program:

in commandline:

node index.js <<input_number>>

example: 
node app.js 9

output:

9 9 9 9 9 9 9 9 9 
9 8 8 8 8 8 8 8 8 
9 8 7 7 7 7 7 7 7 
9 8 7 6 6 6 6 6 6 
9 8 7 6 5 5 5 5 5 
9 8 7 6 5 4 4 4 4 
9 8 7 6 5 4 3 3 3 
9 8 7 6 5 4 3 2 2 
9 8 7 6 5 4 3 2 1 


*/
