type combine = string | number;

function add1(a: string, b: string): string;
function add1(a: number, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: number): number;
function add1(a: combine, b: combine) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

console.log(add1('hamidreza ', 'nasrollahy').split(','));
