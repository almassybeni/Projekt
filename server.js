const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();


const db = new sqlite3.Database('termekek.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Csatlakozva a termekek.db adatbázishoz');
});


db.run(`
  CREATE TABLE IF NOT EXISTS termekek (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nev TEXT,
    ar INTEGER,
    keszleten INTEGER,
    kategoria TEXT,
    leiras TEXT
  )
`, (err) => {
  if (err) return console.error(err.message);

 
  const sql = `
    INSERT INTO termekek (nev, ar, keszleten, kategoria, leiras)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sql, ['Ceruza', 150, 200, 'Írószer', 'Egyszerű grafit ceruza iskolai használatra'], function(err) {
    if (err) return console.error(err.message);
    console.log('Ceruza beszúrva');
  });

  db.run(sql, ['Radír', 100, 300, 'Írószer', 'Puha radír, amely nem hagy nyomot'], function(err) {
    if (err) return console.error(err.message);
    console.log('Radír beszúrva');
  });
});

app.listen(3000, () => {
  console.log('Szerver fut a http://localhost:3000 címen');
});
