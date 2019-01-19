const set = require("../libs/extended_set").set;
const database_fanction = require("./database_fanction");
const create_tables = database_fanction.create_tables;
const get_spec_id = database_fanction.get_spec_id;
const get_disjunction_id = database_fanction.get_disjunction_id;
const get_negation_id = database_fanction.get_negation_id;
const get_tau_id = database_fanction.get_tau_id;
const get_verity = database_fanction.get_verity;
const set_axiom = database_fanction.set_axiom;
const set_proof = database_fanction.set_proof;
const get_proof = database_fanction.get_proof;
const get_use_letters = database_fanction.get_use_letters;

// ===================== Математические объекты =====================
class SignCombination{
  constructor(){
    this._use_letters = undefined;
  }

  eq(other){
    // Сравнение знакосочетаний
    return this.name === other.name && this.id === other.id;
  }

  get use_letters(){
    if (this._use_letters !== undefined) return this._use_letters;
    return get_use_letters(this);
  }

  toString(){
    return this.name + " " + this.id
  }

};

class Term extends SignCombination{

};

class Ratio extends SignCombination{
  constructor() {
    super();
    this._verity = undefined;
    this._proof = undefined;
  }

  get verity(){
    if (this._verity !== undefined) return this._verity;
    return get_verity(this);
  }

  axiom(){
    this._verity = true;
    set_axiom(this)
  };

  set proof(ratios){
    this._proof = ratios;
    this._verity = true;
    set_proof(this);
  }

  get proof(){
    if (this._proof !== undefined) return this._proof;
    this._proof = get_proof(this);
    return this._proof;
  }

};

class Letter extends Term{
  constructor(theory, letter_id){
    super();
    this.theory = theory;
    this.id = letter_id;
    this.name = "letter";
    this._use_letters = (() => {
      let use_letters = set();
      use_letters.add(this.id);
      return use_letters;
    })();
  }
  

};

class Tau extends Term{
  constructor(ratio, letter, theory, id){
    super();
    this.name = "tau"
    if (id){
      this.id = id;
      this.theory = theory;
    }else{
      this._tau_ratio = ratio;
      this._tau_letter = letter;
      this.theory = ratio.theory;
      this._use_letters = set(ratio.use_letters);
      this._use_letters.delete(letter.id);
      this.id = get_tau_id(this);
    };
  }

  get tau_ratio(){
    if (this._tau_ratio) return this._tau_ratio;
  }

  get tau_letter(){
    if (this._tau_letter) return this._tau_letter;
  }

};

class Negation extends Ratio{
  constructor(ratio, theory, id){
    super();
    this.name = "negation";
    if (id){
      this.id = id;
      this.theory = theory;
    }else{
      this._negation_ratio = ratio;
      this.theory = ratio.theory;
      this._use_letters = set(ratio.use_letters);
      this.id = get_negation_id(this);
    };
  }

  get negation_ratio(){
    if (this._negation_ratio) return this._negation_ratio;
  }

};

class Disjunction extends Ratio{
  constructor(args, theory, id){
    super();
    this.name = "disjunction";
    if (id){
      this.id = id;
      this.theory = theory;
    }else{
      this._disjunction_args = args;
      this.theory = args[0].theory;
      this._use_letters = args[0].use_letters.union(args[1].use_letters);
      this.id = get_disjunction_id(this);
    };
  }

  get disjunction_args(){
    if (this._disjunction_args) return this._disjunction_args;
  }


};

class Relation extends Ratio{
  constructor(name, args, theory, id){
    super();
    if (id){
      this.id = id;
      this.theory = theory;
    }else{
      this.name = name;
      this._specialsign_args = args;
      this.theory = args[0].theory;
      this._use_letters = args[0].use_letters.union(args[1].use_letters);
      this.id = get_spec_id(this);
    };
  }

  get specialsign_args(){
    if (this._specialsign_args) return this._specialsign_args;
  }

};

class Substantive extends Term{
  constructor(name, args, theory, id){
    super();
    this.name = name;
    if (id){
      this.id = id;
      this.theory = theory;
    }else{
      this._specialsign_args = args;
      this.theory = args[0].theory
      this._use_letters = args[0].use_letters.union(args[1].use_letters);
      this.id = get_spec_id(this);
    };
  }

  get specialsign_args(){
    if (this._specialsign_args) return this._specialsign_args;
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

  create(name, id){
    if (name == 'letter') return new Letter(this, id);
    if (name == 'tau') return new Tau(undefined, undefined, this, id);
    if (name == 'negation') return new Negation(undefined, this, id)
    if (name == 'disjunction') return new Disjunction(undefined, this, id)
    if (name == 'belong') return new Relation("belong", undefined, this, id)
    if (name == 'pair') return new Relation(name="pair", undefined, this, id)
    if (name == 'equal') return new Substantive(name="equal", undefined, this, id)
  }

  copy(sc){
    return this.create(sc.name, sc.id);
  }

  close(){
    this.db.exec('COMMIT');
    this.db.close();
  }

};

// ============= функции создания математических объектов ===========

exports.theory = () => {
  return new MathTheory();
};

exports.tau = (ratio, letter) => {
  return new Tau(ratio, letter);
};

exports.negation = (a) => {
  return new Negation(a);
};

exports.disjunction = (a, b) => {
  return new Disjunction([a, b]);
};

exports.belong = (a, b) => {
  return new Relation('belong', [a, b]);
};

exports.pair = (a, b) => {
  return new Substantive('pair', [a, b]);
};

exports.equal = (a, b) => {
  return new Relation('equal', [a, b]);
};


