SELECT * FROM estados WHERE id = 40

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 40)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 34)

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Caruaru', 920.6, 
    (SELECT id FROM estados WHERE sigla = 'PE')
)

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
)

SELECT * FROM cidades
