SELECT * FROM estados

SELECT Nome, sigla AS 'Sigla do estado' 
FROM estados
WHERE regiao = 'Sul'

SELECT nome, regiao, populacao 
FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC
