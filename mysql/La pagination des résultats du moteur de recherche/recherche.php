<?php
const NB_PAR_PAGE = 5;
$motsClefs = filter_input(INPUT_GET, 'motsClefs',
                          FILTER_SANITIZE_STRING);
$page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT) ?? 1;
$debut = ($page - 1) * NB_PAR_PAGE;
require_once '../connexion.php';
session_start();
if(!isset($_SESSION['recherche'][$motsClefs])) {
  $query = 'SELECT nbResultats(:motsClefs);';
  $prep = $pdo->prepare($query);
  $prep->bindValue(':motsClefs', $motsClefs);
  $prep->execute();
  $_SESSION['recherche'][$motsClefs] =
    (int)$prep->fetch(PDO::FETCH_NUM)[0];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>Résultats pour <?=$motsClefs?></title>
</head>
<body>
  <?php if($_SESSION['recherche'][$motsClefs]===0) : ?>
    <p>Désolé mais nous n'avons trouvé aucune page correspondant
      à votre recherche</p>
  <?php else : ?>
    <ul>
      <?php
        $query = 'CALL rechercher(:motsClefs, :debut, :nb);';
        $prep = $pdo->prepare($query);
        $prep->bindValue(':motsClefs', $motsClefs);
        $prep->bindValue(':debut', $debut);
        $prep->bindValue(':nb', NB_PAR_PAGE);

        $prep->execute();
        $arr = $prep->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($arr); $i++) {
            echo '<li><a href="' . $arr[$i]['adresse'] . '">' .
                 $arr[$i]['titre'] . '</a></li>';
        }
      ?>
    </ul>
    <?php
      if($page !== 1) {
        echo '<a href="recherche.php?motsClefs='.$motsClefs.
             '&page='.($page-1).'">&lt; page précédente</a>';
      }
      if($page !== (int)ceil($_SESSION['recherche'][$motsClefs]
          / NB_PAR_PAGE)) {
        echo ' <a href="recherche.php?motsClefs='.$motsClefs.
             '&page='.($page+1).'">page suivante &gt;</a>';
      }
    endif;
    ?>
</body>
</html>
