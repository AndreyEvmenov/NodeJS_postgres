// эти команды необходимо выполнить в postgreSQL для создания 
// необходимых таблиц в базе данных
// параметры базы данных указаны в файле db.js

create TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100)
);

create TABLE actions(
    id SERIAL PRIMARY KEY,
    userid INTEGER,
    username VARCHAR(100),
    email VARCHAR(100),
    action VARCHAR(100),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users (id)
);

