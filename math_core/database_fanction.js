let lite = require('better-sqlite3');

exports.create_tables = () =>{
    const PATH = __dirname +'/database/database.sqlite3'
    const command = `
        CREATE TABLE IF NOT EXISTS 
        tau (
            id INTEGER PRIMARY KEY,
            ratio_name TEXT, 
            ratio_id INTEGER, 
            letter_id INTEGER,
            use_letters TEXT,
            UNIQUE (ratio_name, ratio_id, letter_id)
            );
        CREATE TABLE IF NOT EXISTS 
        negation (
            id INTEGER PRIMARY KEY,
            ratio_name TEXT,
            ratio_id INTEGER,
            use_letters TEXT,
            UNIQUE (ratio_name, ratio_id)
            );
        CREATE TABLE IF NOT EXISTS 
        disjunction (
            id INTEGER PRIMARY KEY,
            ratio0_name TEXT,
            ratio0_id INTEGER,
            ratio1_name TEXT,
            ratio1_id INTEGER,
            use_letters TEXT,
            UNIQUE (ratio0_name, ratio0_id, ratio1_name, ratio1_id)
        );
        CREATE TABLE IF NOT EXISTS 
        belong (
            id INTEGER PRIMARY KEY, 
            term0_name TEXT, 
            term0_id INTEGER, 
            term1_name TEXT, 
            term1_id INTEGER, 
            use_letters TEXT, 
            UNIQUE (term0_name, term0_id, term1_name, term1_id)
        );
        CREATE TABLE IF NOT EXISTS 
        equal (
            id INTEGER PRIMARY KEY, 
            term0_name TEXT, 
            term0_id INTEGER, 
            term1_name TEXT, 
            term1_id INTEGER, 
            use_letters TEXT, 
            UNIQUE (term0_name, term0_id, term1_name, term1_id)
        );
        CREATE TABLE IF NOT EXISTS 
        pair (
            id INTEGER PRIMARY KEY, 
            term0_name TEXT, 
            term0_id INTEGER, 
            term1_name TEXT, 
            term1_id INTEGER, 
            use_letters TEXT, 
            UNIQUE (term0_name, term0_id, term1_name, term1_id)
        );
        CREATE TABLE IF NOT EXISTS 
        quant_exist (
            sc_name TEXT,
            sc_id INTEGER,
            letter_id INTEGER,
            term_name TEXT,
            term_id INTEGER,
            new_sc_id INTEGER,
            UNIQUE (sc_name, sc_id, letter_id, term_name, term_id)
        );
        CREATE TABLE IF NOT EXISTS 
        theorem (
            ratio_name TEXT,
            ratio_id INTEGER,
            ratio0_name TEXT,
            ratio0_id INTEGER,
            ratio1_name TEXT,
            ratio1_id INTEGER,
            UNIQUE (ratio_name, ratio_id)
        );
        `
    db = lite(PATH);
    db.exec('BEGIN');
    db.exec(command);
    db.exec('COMMIT');
    db.exec('BEGIN');
    return db;
};


exports.get_spec_id = sc => {
    const db = sc.theory.db;
    const use_letters = sc.use_letters.join(' ');
    const com1 = `INSERT OR IGNORE INTO ${sc.name} 
                    (term0_name, term0_id, term1_name, term1_id ,use_letters) 
                    VALUES ('${sc.args[0].name}', ${sc.args[0].id}, '${sc.args[1].name}', ${sc.args[1].id}, '${use_letters}')
                `
    const com2 = `SELECT id FROM ${sc.name} 
                    WHERE term0_name = '${sc.args[0].name}' AND term0_id = ${sc.args[0].id} AND 
                    term1_name = '${sc.args[1].name}' AND term1_id = ${sc.args[1].id}
                `
    db.exec(com1);
    return db.prepare(com2).get().id;
};

exports.get_disjunction_id = sc => {
    const db = sc.theory.db;
    const use_letters = sc.use_letters.join(' ');
    const com1 = `INSERT OR IGNORE INTO disjunction
                    (ratio0_name, ratio0_id, ratio1_name, ratio1_id, use_letters)
                    VALUES ('${sc.disjunction_args[0].name}', ${sc.disjunction_args[0].id}, '${sc.disjunction_args[1].name}', ${sc.disjunction_args[1].id}, '${use_letters}')
                `
    const com2 = `SELECT id FROM disjunction 
                    WHERE ratio0_name = '${sc.disjunction_args[0].name}' AND ratio0_id = ${sc.disjunction_args[0].id} AND 
                    ratio1_name = '${sc.disjunction_args[1].name}' AND ratio1_id = ${sc.disjunction_args[1].id}
                `
    db.exec(com1);
    return db.prepare(com2).get().id;
};

exports.get_negation_id = sc => {
    const db = sc.theory.db;
    const use_letters = sc.use_letters.join(' ');
    const com1 = `INSERT OR IGNORE INTO negation
                    (ratio_name, ratio_id, use_letters)
                    VALUES ('${sc.negation_ratio.name}', ${sc.negation_ratio.id}, '${use_letters}')
                `
    const com2 = `SELECT id FROM negation 
                    WHERE ratio_name = '${sc.negation_ratio.name}' AND ratio_id = ${sc.negation_ratio.id}
                `
    db.exec(com1);
    return db.prepare(com2).get().id;
};

exports.get_tau_id = sc => {
    const db = sc.theory.db;
    const use_letters = sc.use_letters.join(' ');
    const com1 = `INSERT OR IGNORE INTO tau
                    (ratio_name, ratio_id, letter_id, use_letters)
                    VALUES ('${sc.tau_ratio.name}', ${sc.tau_ratio.id} , ${sc.tau_letter.id}, '${use_letters}')
                `
    const com2 = `SELECT id FROM tau 
                    WHERE ratio_name = '${sc.tau_ratio.name}' AND ratio_id = ${sc.tau_ratio.id} AND letter_id = ${sc.tau_letter.id}
                `
    db.exec(com1);
    return db.prepare(com2).get().id;
};