# WoknRolls — site web

Site vitrine du restaurant **WoknRolls** (Saint-Cyr-sur-Mer, 83270).

## Stack

- HTML5 sémantique + CSS pur (variables, clamp, grid)
- JS vanilla (IntersectionObserver, smooth scroll natif)
- Aucune dépendance runtime — site 100% statique
- Polices : Shippori Mincho + Inter (Google Fonts)

## Structure

```
site/
├── index.html            # Landing one-page
├── css/styles.css
├── js/main.js
├── assets/
│   ├── img/              # logo, favicon, fonds
│   └── pdf/carte-woknrolls.pdf
├── robots.txt
├── sitemap.xml
└── vercel.json           # headers sécurité + cache
```

## SEO mis en place

- Title + meta description optimisés (mots-clés locaux : Saint-Cyr-sur-Mer, Les Lecques, La Cadière-d'Azur)
- **JSON-LD `Restaurant`** complet : adresse, géo, horaires, cuisines, paiements, zone de livraison, menu
- Open Graph + Twitter Card
- Balises `geo.region`, `geo.position`, `ICBM`
- Hiérarchie `h1` → `h2` → `h3` propre
- Sitemap XML + robots.txt
- Canonical
- `lang="fr"`, attributs `alt`, navigation accessible (`aria-label`, skip link)
- Headers sécurité (HSTS, CSP-friendly) via Vercel

## Déploiement

Push sur `main` → Vercel build automatique → DNS Hostinger.

## TODO (avant mise en prod)

- [ ] Créer une image `og-cover.jpg` 1200×630 (photo plat signature + logo)
- [ ] Apple touch icon 180×180
- [ ] Photos plats / restaurant pour enrichir la page (galerie)
- [ ] Vérifier les horaires exacts (jour de fermeture, services)
- [ ] Récupérer ID Google Business Profile et brancher les avis
