let n = 3;
let V1 = [ 1, 3, -5 ];
let V2 = [ 4, -2, -1 ];

function dot_product (V1, V2) {

	let ps = 0;

	for (let i = 0; i < n; i++)
		ps = ps + V1[i] * V2[i];
		return ps;
}

console.log(dot_product(V1, V2));

function Checkortho () {
    if (dot_product(V1, V2) == 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(Checkortho());