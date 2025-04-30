CREATE TABLE invitation (
    sender_id  INTEGER NOT NULL ,
    recever_id INTEGER NOT NULL ,
    groupe_id INTEGER NOT NULL,
    PRIMARY KEY (post_id,friend_id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (recever_id) REFERENCES users(id)
);