# Mémoire projet — Neos Creation (05/2026)

Ce document récapitule les décisions, le style, le copy et les modifications réalisées sur le site **Neos Creation** afin de pouvoir reprendre le projet sur un autre ordinateur sans perdre le contexte.

## Direction & préférences (à respecter)

- **Ton / copy**: court, direct, sans phrases “guidage” type *“Faites défiler…”*. Éviter le blabla marketing générique.
- **Promesse**: clarté + motion design pour produit tech / SaaS, focus conversion.
- **Révisions**: **illimitées** (formulation courte, cadrée par le brief).
- **Formats**: **Full HD** (pas “HD”).
- **Design CTA rendez-vous**: bouton noir + texte blanc + **contour dégradé violet** + **lueurs violettes** (couleur glow = `#7A2BCB`), pas de déplacement du bouton au hover.
- **Largeurs**: sections structurées avec `container-neos`, mais certains carrousels doivent “bleed” full-width (logos + réalisations).

## Tokens importants (dans `app/globals.css`)

- **Accent UI**: `--accent: #c49cff`, `--accent-hover: #d7b8ff`
- **Couleur glow bouton**: glow en `rgba(122, 43, 203, …)` (équivalent `#7A2BCB`)
- **Container global**: `.container-neos { max-w-[1120px]; px-4 md:px-8; }`

## Copy final (Hero)

Fichier: `components/Hero.tsx`

- **H1** (2 lignes):
  - Ligne 1: `Votre solution tech enfin claire` (mot **claire** en accent)
  - Ligne 2 (serif italique): `en motion-design`
- **Paragraphe**: conservé en version “initiale” (ne pas changer sans demande).

## Styles boutons (CTA Calendly)

Fichier: `app/globals.css`

- **Boutons rendez-vous / appel**: utiliser **uniquement**:
  - `btn-primary-fancy-sm` (version small)
  - `btn-primary-fancy` (version large)
- Le style impose:
  - **Fill** noir pur + texte blanc
  - **Contour** dégradé (accent → accent-hover)
  - **Lueur** externe + interne (glow = `#7A2BCB`)
  - **Hover**: augmente la lueur, **sans déplacer** le bouton

Endroits où c’est appliqué:
- `components/Hero.tsx` (CTA principal)
- `components/Header.tsx` (desktop + mobile)
- `components/Offer.tsx` (CTA du bloc offre)
- `components/Footer.tsx` (CTA footer)

## Contours “fancy” (cartes / badges)

Fichier: `app/globals.css`

- **Carte Offre**: `card-fancy-border` (contour dégradé + glow au repos)
- **Badges étapes (1/2)**: `badge-fancy` (même construction visuelle que le bouton)

## Section Réalisations (Portfolio)

Fichier: `components/Portfolio.tsx`

- La zone vidéos est en **full-width** (comme le marquee logos), avec paddings `px-6 md:px-10`.
- Les cartes vidéos ont été **grossies** (scroll horizontal conservé) :
  - `w-[96vw] sm:w-[90vw] md:w-[78vw] lg:w-[520px] xl:w-[620px]`
- Texte “Faites défiler…” supprimé.
- Note: un titre Vimeo utilise encore `Obo Kaz - Vidéo explicative` (sans accent) dans les `title` d’iframe.

## Section Témoignages

Fichier: `components/Testimonials.tsx`

- Correction rôle: **“Fondatrice · Obò Kaz”** (pas “Obò Ka”).
- Sous-texte de section supprimé (la phrase “Des retours…”).

## Section Expertise

Fichier: `components/Expertise.tsx`

- Titre corrigé: **“Pourquoi une vidéo explicative ?”** (ajout du `?`).

## Section Offre

Fichier: `components/Offer.tsx`

- Carte offre: largeur réduite via `max-w-3xl`, **alignée à gauche** (suppression du centrage `mx-auto`).
- Liste “included” (points de l’offre):
  - “Révisions illimitées jusqu’à validation finale”
  - Exports “16:9, 9:16, 1:1”

## Process (2 étapes)

Fichier: `components/ProcessSteps.tsx`

- Étape 2: mentionne **révisions illimitées**.
- Pastilles `1` / `2`: style `badge-fancy` (même esthétique que le bouton).

## FAQ (améliorée avec la base de contenu)

Fichiers: `components/FAQ.tsx` + `components/JsonLd.tsx`

- Délai: ~2 semaines après validation script + **option express 48h** (formats courts/déclinaisons).
- Script: co-construit + “pas besoin d’un brief parfait”.
- Révisions: illimitées jusqu’à validation finale, dans le périmètre du brief.
- Formats: **Exports Full HD** (16:9, 9:16, 1:1).
- Budget: “à partir de 697€” + pack Pitch chiffré au devis.
- JSON-LD aligné sur la FAQ affichée.

## Footer

Fichier: `components/Footer.tsx`

- Le texte “Neos Creation” a été remplacé par le **logo** (même fichier que le header via `next/image`).

## Notes techniques / bonnes pratiques

- Éviter d’éditer les fichiers `.next/` (build outputs).
- Les CTA Calendly doivent rester cohérents: **toujours** `btn-primary-fancy(-sm)` quand c’est un rendez-vous / appel.
- Les textes “guidage” ou “filler” (ex: “Faites défiler…”) sont à éviter: si besoin, préférer une UI (flèches / affordances) plutôt qu’une phrase.

