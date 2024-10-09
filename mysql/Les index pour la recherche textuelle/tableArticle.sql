CREATE TABLE Articles(
  idArticle  INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
  adresse    VARCHAR(20)   NOT NULL       UNIQUE,
  titre      VARCHAR(20)   NOT NULL,
  contenu    TEXT          NOT NULL
) ENGINE = MYISAM;

CREATE FULLTEXT INDEX in_articles_fulltext_titrecontenu
ON Articles(titre, contenu);
