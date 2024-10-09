<?php
require_once '../connexion.php';
$query = 'CALL ajouterUtilisateur(:nom, :prenom, :email, :ligne1, NULL, :cp, :ville);';
$prep = $pdo->prepare($query);
$prep->bindValue(':nom', 'MIGIEU');
$prep->bindValue(':prenom', 'Madeleine');
$prep->bindValue(':email', 'madeleine.migieu@eni.fr');
$prep->bindValue(':ligne1', 'place de Brou');
$prep->bindValue(':cp', 1000);
$prep->bindValue(':ville', 'Bourg-en-Bresse');
$prep->execute();
echo 'Ajout de l\'utilisatrice Madeleine MIGIEU';