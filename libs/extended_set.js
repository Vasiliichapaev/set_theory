// ========== Доработка стандартных множеств ========================

class ExtendedSet extends Set {
    join(separator) {
        if (this.size === 0) return "";

        let str = "";

        this.forEach(element => {
            str += String(element) + separator;
        });
        return str.substring(0, str.length - separator.length);
    }

    union(other_set) {
        let union_set = new ExtendedSet();

        this.forEach(element => {
            union_set.add(element);
        });

        other_set.forEach(element => {
            union_set.add(element);
        });

        return union_set;
    }
}

module.exports = arg => {
    if (arg === undefined) return new ExtendedSet();

    if (arg instanceof Array || arg instanceof Set || typeof arg == "string") {
        if (typeof arg == "string") {
            if (arg === "") {
                arg = [];
            } else {
                arg = arg.split(" ");
            }
            for (let i in arg) arg[i] = +arg[i];
        }

        let new_set = new ExtendedSet();
        arg.forEach(element => {
            new_set.add(element);
        });
        return new_set;
    }
    throw new Error("arg must be Set or Array or String or nothing");
};
