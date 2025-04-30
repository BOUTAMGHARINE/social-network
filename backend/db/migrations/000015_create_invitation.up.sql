
CREATE TABLE invitations (
    sender_id   INTEGER NOT NULL,
    recever_id  INTEGER NOT NULL,
    groupe_id   INTEGER NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (sender_id, recever_id, groupe_id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (recever_id) REFERENCES users(id),
    FOREIGN KEY (groupe_id) REFERENCES groupes(id)
);