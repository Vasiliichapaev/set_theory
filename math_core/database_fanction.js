let sqlite3 = require('sqlite3').verbose();

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
    db = new sqlite3.Database(PATH);
    db.serialize(() => {
        db.exec('BEGIN');
        db.exec(command);
        db.exec('COMMIT');
        db.exec('BEGIN');
    });
    return db;
};


exports.get_spec_id = sc => {
    const use_letters = sc.use_letters.join(' ');
    const com1 = `INSERT OR IGNORE INTO ${sc.name} 
                    (term0_name, term0_id, term1_name, term1_id ,use_letters) 
                    VALUES ('${sc.args[0].name}', ${sc.args[0].id}, '${sc.args[1].name}', ${sc.args[1].id}, '${use_letters}')
                `
    const com2 = `SELECT * FROM ${sc.name} 
                    WHERE term0_name = '${sc.args[0].name}' AND term0_id = ${sc.args[0].id} AND 
                    term1_name = '${sc.args[1].name}' AND term1_id = ${sc.args[1].id}
                `
    const db = sc.theory.db;
    db.serialize(() => {
        db.exec(com1);
          });
    let a = 0;
    db.serialize(() => {
        db.get(com2, [], (err, row) => {
            sc.id = row.id;
          });
    });  
};

