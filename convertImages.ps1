$fichiers = Get-ChildItem '.\imagesSources\*.jpg'
foreach ($fichierSource in $fichiers) {
    $baseNom = $fichierSource -replace '^(.*\\)imagesSources(\\.*)\..{3}$', '$1imagesCompressees$2'
    $info  = colorist identify $fichierSource --json
    $w = $info -replace '^.*"width":(\d+).*$', '$1'
    $h = $info -replace '^.*"height":(\d+).*$', '$1'
    if ($w -lt $h) { #portrait
        $largeur = 600
    } else { #paysage
        $largeur = 800
    }
    #Grandes
    #colorist convert $fichierSource $baseNom'-Grande.jpg' -q 45
    #colorist convert $fichierSource $baseNom'-Grande.webp' -q 60
    #colorist convert $fichierSource $baseNom'-Grande.avif' -q 55 --speed 0
    #Moyennes
    #colorist convert $fichierSource $baseNom'-Moyenne.jpg' -q 45 --resize $largeur
    #colorist convert $fichierSource $baseNom'-Moyenne.webp' -q 60 --resize $largeur
    #colorist convert $fichierSource $baseNom'-Moyenne.avif' -q 35 --speed 0 --resize $largeur
    #Petites
    #$largeur /=2
    #colorist convert $fichierSource $baseNom'-Petite.jpg' -q 35 --resize $largeur
    #colorist convert $fichierSource $baseNom'-Petite.webp' -q 45 --resize $largeur
    #colorist convert $fichierSource $baseNom'-Petite.avif' -q 25 --speed 0 --resize $largeur
    for($i=10; $i -le 100; $i+=10) {
        $n = $baseNom+$i
        colorist convert $fichierSource $n'-GreenITetAccessibilite.jpg' -q $i --resize 200
    }
}
