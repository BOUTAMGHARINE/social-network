CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_privacy TEXT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    imagePath TEXT,
    groupe_id INTEGER,
    createdAt INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (groupe_id) REFERENCES groupe(id) ON DELETE CASCADE
);