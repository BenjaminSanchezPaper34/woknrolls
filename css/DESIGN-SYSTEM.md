# WoknRolls — Design System

Système visuel dérivé de la home Adobe Muse d'origine. À utiliser sur toutes les pages enfants (carte, livraison, contact, mentions, etc.).

## Principes

- **Fond papier sombre** : texture `images/fondgris-woknrolls2.jpg` tilée + vignettage radial pour la profondeur
- **Hiérarchie sobre** : un seul accent or `#D8D295` (rappel du bouton "Consulter la carte" du site Muse), un accent secondaire rouge `#C8102E` (cohérence supports print)
- **Typographie premium** : Cormorant Garamond (display, italique japonisant) + Outfit (sans-serif moderne)
- **Layout généreux** : padding mobile-first, max-width 1240px, scale spacing base 8

## Tokens (CSS variables)

| Token | Valeur | Usage |
|---|---|---|
| `--c-ink-1` | `#0E0E10` | Fond ultime |
| `--c-ink-2` | `#18181B` | Surface |
| `--c-ink-3` | `#232328` | Surface élevée |
| `--c-paper` / `--c-paper-2/3/4` | blanc + opacités | Texte primaire/secondaire |
| `--c-gold` / `--c-gold-2` | `#D8D295` / `#BFB877` | Accent principal |
| `--c-red` / `--c-red-2` | `#C8102E` / `#8E0A1F` | CTA / urgence |
| `--bg-texture` | image papier gris | Fond du site |
| `--f-sans` | Outfit | UI / corps |
| `--f-serif` | Cormorant Garamond | Display / titres élégants |
| `--fs-xs … --fs-4xl` | clamp() | Échelle typo responsive |
| `--s-1 … --s-9` | 0.25 → 6rem | Échelle spacing base 8 |
| `--maxw` / `--maxw-narrow` | 1240px / 780px | Largeur max conteneurs |
| `--ease` | `cubic-bezier(.22,.61,.36,1)` | Easing standard |

## Composants

### Topbar partagée (`.topbar`)
Sticky, transparent flouté, gradient bas. Toujours : `back ← logo · phone →`.

### Boutons (`.btn`)
Tous en pill, uppercase, letter-spacing serré.
- `.btn--gold` : CTA principal (commander, télécharger)
- `.btn--ghost` : action secondaire
- `.btn--red` : urgence / accent print

### Card (`.card`, `.card--gold`, `.card--red`)
Surface élevée semi-transparente avec bordure et flou de fond.

### Set / Menu (`.set`, `.set__head`, `.set__title`, `.set__price`)
Encadré or pour les menus composés.

### Dish list (`.dish-list`)
Liste de plats format restaurant : `nom — pointillés — prix`. Le composant le plus utilisé sur les pages carte.

### Section head (`.section-head`)
H2 souligné par filet or + sous-titre `<small>` + note italique optionnelle.

### TOC (`.toc`)
Sommaire d'ancres en chips, hover or.

### Typographie utilitaire
`.t-eyebrow`, `.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-lead`, `.t-meta`

### Reveal (`[data-reveal]`)
Apparition fade + translateY au scroll (à brancher avec un IntersectionObserver côté JS).

## Convention d'utilisation

```html
<link rel="stylesheet" href="css/design-system.css"/>
<link rel="stylesheet" href="css/page-name.css"/>  <!-- spécifique -->
```

La feuille spécifique d'une page doit **uniquement** :
- définir le layout propre à la page
- utiliser les tokens existants (`var(--c-gold)`, etc.)
- éviter de redéfinir des composants déjà présents dans le DS

Si un composant manque pour une page nouvelle → l'ajouter dans `design-system.css` (pas dans la feuille de page) pour qu'il soit réutilisable.

## Pages enfants prévues

- ✅ `carte.html` — carte complète avec dish-list + sets
- 🔜 `livraison.html` — zones, conditions, FAQ
- 🔜 `contact.html` — adresse, horaires, Maps embed
- 🔜 `mentions.html` — légales

## Note sur la home (`index.html`)

La home reste sur le runtime Adobe Muse (CSS Muse intactes) pour conserver le design d'origine validé par le client. Quand on décidera de la migrer, elle pourra adopter le même design system sans rupture visuelle (palette + texture identiques).
