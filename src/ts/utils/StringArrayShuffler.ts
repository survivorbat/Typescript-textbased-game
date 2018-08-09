import { IArrayShuffler } from "../abstract/utils/IArrayShuffler";
import { injectable } from "../../../node_modules/inversify";

@injectable()
export class StringArrayShuffler implements IArrayShuffler<string> {
    shuffle(a: Array<string>): Array<string> {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
}