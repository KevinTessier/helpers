<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Utilisateurs</title>
</head>
<body>
  <h1>Les utilisateurs et utilisatrices</h1>
  <?php
    session_start();
    if(isset($_SESSION['message'])) {
        echo '<p role="alert">'.$_SESSION['message'].'</p>';
        unset($_SESSION['message']);
    }
    require_once '../connexion.php';
    $query = 'CALL listerUtilisateurs();';
    $utilisateurs = $pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);
    if(count($utilisateurs)===0) :
  ?>
    <p>Il n'y a actuellement aucun utilisateur</p>
  <?php else: ?>
    <form method="POST">
      <table>
        <caption>la liste des utilisateurs et des utilisatrices</caption>
        <tr>
          <th scope="col">sélection</th>
          <th scope="col">nom</th>
          <th scope="col">prénom</th>
        </tr>
        <?php
          for ($i = 0; $i < count($utilisateurs); $i++) {
            echo '<tr><td><input type="checkbox" name="idsUtilisateurs['.$utilisateurs[$i]['idUtilisateur'].']" value="'.$utilisateurs[$i]['idUtilisateur'].'" aria-label="'.$utilisateurs[$i]['nom'].' '.$utilisateurs[$i]['prenom'].'"></td><td>'. $utilisateurs[$i]['nom'].'</td><td>'. $utilisateurs[$i]['prenom'].'</td></tr>';
          }
        ?>
      </table>
      <input type="submit" value="Supprimer les personnes selectionnées" name="suppr" formaction="supprimerUtilisateurs.php">
    </form>
  <?php endif; ?>
</body>
</html>
