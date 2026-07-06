MON COPAIN DIGITAL — DOSSIER FAVICONS
=====================================

COMMENT L'INSTALLER (2 étapes)
------------------------------
1. Glisse le dossier "favicons" complet à la RACINE de ton repo/site.
   (au même niveau que ton index.html)

2. Ouvre "head-snippet.html", copie tout le bloc, et colle-le
   dans la balise <head> de chacune de tes pages HTML.
   -> Si ton site utilise un template/layout commun pour le <head>,
      colle-le une seule fois à cet endroit.

C'EST TOUT. L'icône apparaîtra :
- dans l'onglet du navigateur,
- dans les résultats Google (après recrawl : quelques jours à semaines),
- sur l'écran d'accueil iPhone/Android,
- à l'installation en PWA.

CONTENU DU DOSSIER
------------------
favicon.ico            -> icône onglet + Google (16/32/48 intégrés)
favicon-16.png         -> onglet
favicon-32.png         -> onglet Retina
favicon-48.png         -> Windows / Google
favicon-96.png         -> haute densité
favicon-180.png        -> (identique à apple-touch-icon)
apple-touch-icon.png   -> iPhone / iPad / Android
favicon-192.png        -> PWA
favicon-512.png        -> PWA / partage
site.webmanifest       -> déclaration PWA (nom, couleurs, icônes)
head-snippet.html      -> le code à coller dans <head>

ASTUCE GOOGLE
-------------
Après mise en ligne, va dans Google Search Console et demande
une réindexation de ta page d'accueil pour accélérer l'affichage
du favicon dans les résultats de recherche.

Couleur de marque : #F3852B (orange)
