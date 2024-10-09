<?php
if (filter_input(INPUT_POST, 'btnSoumission', FILTER_SANITIZE_STRING)) {
    $captcha = filter_input(INPUT_POST, 'g-recaptcha-response', FILTER_SANITIZE_STRING);
    if($captcha) {
        $clefSecrete = 'valeur de la clef privée';
        $reponseJSon = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$clefSecrete.'&response='.$captcha);
        $reponse = json_decode($reponseJSon);
        if(!$reponse->success) {
            $message = 'Vous n\'avez pas validé le captcha';
        }
    } else {
        $message = 'Captcha manquant';
    }

    // vérification des données envoyées

    if (!isset($message)) {
        // traitement du formulaire
        header('location: confirmation.php');
        die();
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title><?=isset($erreur)?'Erreur sur le formulaire':'Connexion'?></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    </head>
    <body>
        Ce code n'est pas directement fonctionnel. Il nécessaite de créer votre clef privée et votre clef public pour votre <a href="https://www.google.com/recaptcha/admin/create">ReCAPTCHA</a>.
        <?=isset($message)?'<div role="alert">' . $message . '</div>':''?>
        <form method="POST">
            <!-- champs du formulaire -->
            <div class="g-recaptcha" data-sitekey="valeur de la clef publique"></div>
            <input type="submit" class="btn btn-primary" name="btnSoumission" value="Envoyer" >
        </form>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </body>
</html>
