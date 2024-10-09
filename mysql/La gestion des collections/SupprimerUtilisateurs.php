<?php
if(filter_input(INPUT_POST, 'suppr', FILTER_SANITIZE_STRING)) {
  session_start();
  if(!isset($_POST['idsUtilisateurs'])) {
    $_SESSION['message'] = 'Aucun utilisateur sélectionné';
  } else {
    $ids = filter_var_array($_POST['idsUtilisateurs'], FILTER_VALIDATE_INT);
    require_once '../connexion.php';
    $query = 'CALL supprimerUtilisateurs(:ids);';
    $prep = $pdo->prepare($query);
    $prep->bindValue(':ids', implode(',',$ids));
    if ($prep->execute()) {
      $_SESSION['message'] = 'Suppression effectuée avec succès';
    } else {
      $_SESSION['message'] = 'La suppression n\'a pas pu être effectuée';
    }
  }
}
header('location: utilisateurs.php');
