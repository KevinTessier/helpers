DELIMITER |
CREATE PROCEDURE listerUtilisateurs()
BEGIN
	SELECT idUtilisateur, nom, prenom FROM utilisateurs ORDER BY nom, prenom;
END|
DELIMITER ;

DELIMITER |
CREATE PROCEDURE supprimerUtilisateurs(IN ids VARCHAR(100))
BEGIN
	DELETE FROM adresses WHERE idAdresse IN(SELECT idAdresse FROM utilisateurs WHERE FIND_IN_SET(idUtilisateur, ids)<>0);
	DELETE FROM utilisateurs WHERE FIND_IN_SET(idUtilisateur, ids)<>0;
END|
DELIMITER ;
