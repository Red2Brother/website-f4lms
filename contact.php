<?php
// Vérification que la requête est bien un POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Vérification du Honeypot Anti-Spam (votre champ caché)
    if (!empty($_POST['_gotcha'])) {
        // C'est un robot qui a rempli le champ caché
        die("Spam détecté.");
    }

    // 2. Récupération et sécurisation des données du formulaire
    $prenom  = htmlspecialchars(trim($_POST['prenom']));
    $nom     = htmlspecialchars(trim($_POST['nom']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $sujet   = htmlspecialchars(trim($_POST['sujet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // 3. Vérification que l'email est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=error_email#contactForm");
        exit();
    }

    // 4. Configuration de l'e-mail
    // /!\ REMPLACEZ PAR VOTRE VRAIE ADRESSE E-MAIL /!\
    $destinataire = "qstutzmann67@gmail.com"; 
    
    $objet_mail = "Nouveau message Portfolio : " . $sujet;

    $contenu = "Vous avez reçu un nouveau message depuis le formulaire de votre portfolio.\n\n";
    $contenu .= "Prénom : " . $prenom . "\n";
    $contenu .= "Nom : " . $nom . "\n";
    $contenu .= "Email : " . $email . "\n\n";
    $contenu .= "Message :\n" . $message . "\n";

    // En-têtes de l'e-mail
    $headers = "From: contact@votre-domaine-portfolio.fr\r\n"; // Mettez une adresse liée à votre serveur si possible
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // 5. Envoi de l'e-mail et redirection
    if (mail($destinataire, $objet_mail, $contenu, $headers)) {
        // Succès
        header("Location: contact.html?status=success#contactForm");
    } else {
        // Échec du serveur (ex: postfix mal configuré)
        header("Location: contact.html?status=error_server#contactForm");
    }
    exit();
} else {
    // Si on accède directement à contact.php sans envoyer le formulaire
    header("Location: contact.html");
    exit();
}
?>