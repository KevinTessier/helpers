SELECT ligne1, ligne2, codePostal, ville
FROM Adresses a
WHERE NOT EXISTS(SELECT * FROM Utilisateurs u WHERE a.idAdresse = u.idAdresse);
