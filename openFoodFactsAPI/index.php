<?php
// Remplacez {barcode} par le code-barres réel du produit
$barcode = '3664346300780';
$url = "https://world.openfoodfacts.net/api/v2/product/{$barcode}";

// Initialisation de la session cURL
$ch = curl_init($url);

// Configuration des options de cURL
// Retourne la réponse au lieu de l'afficher directement
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Ajoutez d'autres options de configuration ici si nécessaire, comme des en-têtes personnalisés

// Exécution de la requête
$response = curl_exec($ch);

// Fermeture de la session cURL
curl_close($ch);

// Traitement de la réponse
if ($response) {
    // Convertit la réponse JSON en un objet PHP
    $data = json_decode($response);

    // Vous pouvez maintenant accéder aux données de la réponse, par exemple :
    // echo "Nom du produit: " . $data->product->product_name_fr . "\n";
    // echo "Marque: " . $data->product->brands . "\n";
    // echo "Catégorie: " . $data->product->categories . "\n";
    // print_r($data); // Affiche toutes les données pour le développement et le débogage
} else {
    echo "Erreur lors de la requête cURL : " . curl_error($ch);
}
?>

<h1>Affichage du résultat</h1>
<p>Nom du produit: <?php echo $data->product->product_name_fr; ?></p>
<p>Marque: <?php echo $data->product->brands; ?></p>
<p>Catégorie: <?php echo $data->product->categories; ?></p>
<p>Allergens: <?php echo $data->product->allergens_imported; ?></p>
<p>Ingredients: <?php echo $data->product->ingredients_text; ?></p>
<p>Image: <img src="<?php echo $data->product->image_url; ?>" alt="Image du produit" width="200"></p>
<p>Image (small): <img src="<?php echo $data->product->image_small_url; ?>" alt="Small image of the product" width="100"></p>
<p>Pays importés: <?php echo $data->product->countries_imported; ?></p>
<p>Code-barres: <?php echo $data->product->code; ?></p>
<p>Quantité: <?php echo $data->product->quantity; ?></p>
<p>Labels: <?php echo $data->product->labels; ?></p>
<p>Labels tags: <?php echo $data->product->labels_tags; ?></p>

<pre><?php print_r($data); ?></pre>

