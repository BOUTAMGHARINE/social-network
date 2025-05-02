CREATE TABLE invitations (
    sender_id      INTEGER NOT NULL,
    receiver_id    INTEGER NOT NULL,  -- Correction de "recever_id"
    groupe_id      INTEGER NOT NULL,
    creation_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    state          TEXT CHECK (state IN ('accept', 'reject', 'encoure')),
    PRIMARY KEY (sender_id, receiver_id, groupe_id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id),
    FOREIGN KEY (groupe_id) REFERENCES groupes(id)
);
