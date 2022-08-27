SELECT * FROM estados

SELECT Nome, sigla as 'Sigla do estado' FROM estados
WHERE regiao = 'Sul'

SELECT nome, regiao from estados
WHERE populacao >= 10
ORDER BY populacao DESC
