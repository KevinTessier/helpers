SELECT ligne1, ligne2, codePostal, ville
FROM Adresses
WHERE idAdresse NOT IN (SELECT DISTINCT idAdresse FROM Utilisateurs);
