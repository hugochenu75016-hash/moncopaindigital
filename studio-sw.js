/* Studio Social · mode hors ligne
   Enregistré par studio-social.html (mcdOfflineInit). Rôle unique : pouvoir rouvrir le Studio sans connexion.
   - Réseau d'abord, toujours : en ligne, on reçoit la dernière version du site, rien n'est servi depuis le cache.
   - Hors ligne seulement, on sert la dernière copie gardée de la page Studio et de ses fichiers.
   - Jamais de cache pour les appels Supabase, Modal, Stripe, ni pour les autres pages du site.
   Pour tout désactiver : remplacer ce fichier par un service worker vide qui appelle self.registration.unregister(). */
var VERSION = 'studio-hors-ligne-v1';
var PAGES = ['/studio-social.html', '/studio-app.html'];
var DOSSIERS = ['/css/', '/js/', '/images/', '/favicons/', '/fonts/'];
var FICHIERS = ['/studio-social.webmanifest', '/studio-icon-512.png'];
var CDN = ['https://cdn.jsdelivr.net/npm/@supabase/'];

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (c) { return c.indexOf('studio-hors-ligne-') === 0 && c !== VERSION; }).map(function (c) { return caches.delete(c); }));
  }).then(function () { return self.clients.claim(); }));
});

function demandeParLeStudio(r) {
  // Un fichier n'est gardé que s'il est demandé par la page Studio (ou par une feuille de style / un script de cette page) :
  // les images des autres pages du site ne remplissent pas le cache.
  try { var ref = new URL(r.referrer); return ref.origin === self.location.origin && (PAGES.indexOf(ref.pathname) >= 0 || /^\/(css|js)\//.test(ref.pathname)); } catch (e) { return false; }
}
function aGarder(url, r) {
  if (r.mode === 'navigate') return url.origin === self.location.origin && PAGES.indexOf(url.pathname) >= 0;
  if (!demandeParLeStudio(r)) return false;
  if (CDN.some(function (p) { return url.href.indexOf(p) === 0; })) return true;
  if (url.origin !== self.location.origin) return false;
  var p = url.pathname;
  return PAGES.indexOf(p) >= 0 || FICHIERS.indexOf(p) >= 0 || DOSSIERS.some(function (d) { return p.indexOf(d) === 0; });
}

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var url = new URL(r.url);
  if (!aGarder(url, r)) return;   // le navigateur s'en occupe normalement
  var cle = PAGES.indexOf(url.pathname) >= 0 ? url.origin + url.pathname : r;   // une seule copie par page, quels que soient ?demo=1, ?source=app…
  e.respondWith(
    fetch(r).then(function (rep) {
      if (rep && (rep.ok || rep.type === 'opaque')) {
        var copie = rep.clone();
        caches.open(VERSION).then(function (c) { return c.put(cle, copie); }).catch(function () {});
      }
      return rep;
    }).catch(function (err) {
      return caches.match(cle).then(function (enCache) { if (enCache) return enCache; throw err; });
    })
  );
});
