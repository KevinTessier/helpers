DELIMITER |
CREATE PROCEDURE rechercher(IN motsclefs VARCHAR(50),
                            IN debut SMALLINT UNSIGNED,
                            IN nombre TINYINT UNSIGNED)
BEGIN
  SELECT adresse, titre
  FROM Articles
  WHERE MATCH(titre, contenu)
  AGAINST(motsclefs)
  LIMIT debut, nombre;
END|
DELIMITER ;

DELIMITER |
CREATE FUNCTION nbResultats(motsclefs VARCHAR(50)) RETURNS INT
BEGIN
  DECLARE nb INT;
  SELECT COUNT(*) INTO nb
  FROM Articles
  WHERE MATCH(titre, contenu)
  AGAINST(motsclefs);
  RETURN nb;
END|
DELIMITER ;
