const create_tables = require("./database_fanction").create_tables;
const get_spec_id = require("./database_fanction").get_spec_id;


// ========== Доработка стандартных множеств ========================

class ExtendedSet extends Set{

  join(separator){
    if (this.size === 0) return '';

    let str = '';

    this.forEach(element => {
      str += String(element) + separator;
    });
    return str.substring(0, str.length - separator.length);
  }

  union(other_set){
    let union_set = new ExtendedSet();

    this.forEach(element => {
      union_set.add(element)
    });

    other_set.forEach(element => {
      union_set.add(element)
    });

    return union_set;
  }
};

set = (arg) => {
  if (arg === undefined) return new ExtendedSet();

  if (arg instanceof Array || arg instanceof Set){
    let new_set = new ExtendedSet();
    arg.forEach(element => {
      new_set.add(element);
    });
    return new_set;
  };
  throw new Error("arg must be Set or Array or nothing");
};

// ==================================================================



class SignCombination{

  eq(other){
    // Сравнение знакосочетаний
    return this.name === other.name && this.id === other.id;
  }

};

class Term extends SignCombination{

};

class Ratio extends SignCombination{

};

class Letter extends Term{
  constructor(theory, letter_id){
    super();
    this.theory = theory;
    this.id = letter_id;
    this.name = "letter";
    this.use_letters = (() => {
      let use_letters = set();
      use_letters.add(this.id);
      return use_letters;
    })();
  }
  

};

class Tau extends Term{
  constructor(ratio, letter){
    super();
    this.name = "tau"
    this.tau_ratio = ratio;
    this.tau_letter = letter;
  }
};

class Negation extends Ratio{
  constructor(ratio){
    super();
    this.name = "negation";
    this.negation_ratio = ratio;
  }
};

class Disjunction extends Ratio{
  constructor(...args){
    super();
    this.name = "disjunction";
    this.disjunction_args = args;
  }
};

class Relation extends Ratio{
  constructor(name, args){
    super();
    this.name = name;
    this.args = args;
    this.theory = args[0].theory
    this.use_letters = args[0].use_letters.union(args[1].use_letters);
    this.id = get_spec_id(this);
  }

};

class Substantive extends Term{
  constructor(name, args){
    super();
    this.name = name;
    this.args = args;
    get_spec_id(this);
  }
};

class MathTheory{
  constructor(){
    this.db = create_tables();
  }

  letter(...args){
    // создаёт букву не встречающуюся в args

    let use_letters = set();

    for (let i in args){
      use_letters = use_letters.union(args[i].use_letters);
    };

    let letter_id = 1;
    while (use_letters.has(letter_id)){
      letter_id++;
    };
    return new Letter(this, letter_id);
  }

  close(){
    this.db.exec('COMMIT');
    this.db.close();
  }

};



let T = new MathTheory();

a = T.letter()
b = T.letter(a)

w = new Relation('belong', [a, b])

console.log(w.id)

T.close()
