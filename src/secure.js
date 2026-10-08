import { random } from '@lukeed/csprng';

var IDX=256, HEX=[], SIZE=256*16, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

export function uid(len) {
	var str='', tmp=(len || 11), num=(1+tmp) / 2 | 0;
	if (!BUFFER || ((IDX + num) > BUFFER.length)) {
		BUFFER = random(Math.max(SIZE, num));
		IDX = 0;
	}

	while (num--) {
		str += HEX[BUFFER[IDX++]];
	}

	return str.substring(0, tmp);
}
