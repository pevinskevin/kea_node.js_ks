import db from './connection.js';

// two tables

// DDL

// db.all for SELECT statements, we want to get something back.
// db.run for INSERT, UPDATE, DELETE, nothing is returned.
// db.exec for schematics without parameters, can contain multiple commands.

const deleteMode = process.argv.includes('--delete');

if (deleteMode) {
	await db.exec(`DROP TABLE IF EXISTS games`);
	await db.exec(`DROP TABLE IF EXISTS runtime_environments`);
}

db.exec(
	`CREATE TABLE IF NOT EXISTS runtime_environments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    version TEXT
    );

	CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    short_description VARCHAR(500),
    genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS') ),
    runtime_environment_id INTEGER,
    FOREIGN KEY (runtime_environment_id) REFERENCES runtime_environments (id)
    );`
);

// DML
// seeding

if (deleteMode) {

await db.run(`INSERT INTO runtime_environments (platform, version)
VALUES ("PS5", 1), ("XBOX 360", 3), ("Steamdeck", 1);

INSERT INTO games (title, short_description, genre, runtime_environment_id)
VALUES ("Dark Souls 3", "Dark Souls III is a dark fantasy action-RPG from FromSoftware that challenges players with its punishing melee combat, intricate level design, and brooding, interconnected world on the brink of ruin.", 
RPG, 1)
)`);
}

