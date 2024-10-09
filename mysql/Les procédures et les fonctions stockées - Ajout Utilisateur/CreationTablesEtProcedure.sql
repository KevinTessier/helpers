CREATE TABLE Utilisateurs(
  idUtilisateur  INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
  nom            VARCHAR(20)   NOT NULL,
  prenom         VARCHAR(20)   NOT NULL,
  email          VARCHAR(40)   NOT NULL   UNIQUE,
  idAdresse      INT           NOT NULL
) ENGINE = MYISAM;

CREATE TABLE Adresses(
  idAdresse  INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
  ligne1     VARCHAR(40)           NULL,
  ligne2     VARCHAR(40)           NULL,
  codePostal MEDIUMINT(5) ZEROFILL NOT NULL,
  ville      VARCHAR(30)           NOT NULL
) ENGINE = MYISAM;

DELIMITER |
CREATE PROCEDURE ajouterUtilisateur(IN nom VARCHAR(20), IN prenom VARCHAR(20), IN email VARCHAR(40), IN ligne1Adresse VARCHAR(40), IN ligne2Adresse VARCHAR(40), IN codePostal MEDIUMINT(5), IN ville VARCHAR(30))
BEGIN
	INSERT INTO Adresses(ligne1, ligne2, codePostal, ville) VALUES(ligne1Adresse, ligne2Adresse, codePostal, ville);
    INSERT INTO utilisateurs(nom, prenom, email, idAdresse) VALUES(nom, prenom, email, LAST_INSERT_ID());
END|
DELIMITER ;
