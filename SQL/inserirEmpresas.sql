
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas 
    (nome, cnpj)
VALUES
    ('Bradesco', 90419392000110),
    ('Vale', 60894336000177),
    ('Cielo', 79925200000105);


DESC empresas;
DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES  
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);