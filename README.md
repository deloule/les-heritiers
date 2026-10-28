# LES HÉRITIERS

> **Pourquoi notre monde est-il ainsi ?**

**LES HÉRITIERS** est un projet d'atlas documentaire mondial, accessible d'abord sur mobile, pour explorer les sources qui éclairent l'histoire humaine **jusqu'au monde contemporain**.

## Notre engagement

**Nous ne détenons pas la connaissance : nous donnons accès aux sources.**

L'application ne se substitue ni aux archives, ni aux chercheurs, ni aux institutions patrimoniales. Elle référence les documents, identifie leur provenance et aide à les retrouver dans le temps et dans l'espace. Elle distingue faits documentés, témoignages, interprétations, désaccords scientifiques et incertitudes. Elle ne transforme pas des hypothèses ou des croyances en certitudes historiques.

## Pourquoi ce projet ?

Les événements ne surviennent pas isolément. L'atlas doit permettre de comprendre les **contextes, transformations, décisions, conséquences et héritages**, sans supposer qu'une seule cause explique chaque événement.

Deux portes d'entrée complémentaires :
- **Explorer le passé** : choisir une époque, une région ou un sujet, puis accéder aux sources.
- **Comprendre le présent** : partir d'une question contemporaine et remonter vers les documents qui éclairent son histoire.

Les relations historiques affichées doivent être documentées et leurs auteurs ou sources identifiables.

## Grands chapitres

Le catalogue a vocation à couvrir toutes les régions du monde et les différentes périodes de l'histoire humaine, sans privilégier un continent :
- Religions, croyances et spiritualités : traditions, textes, institutions, pratiques, circulations, transformations et interactions avec les sociétés.
- Sociétés, cultures, langues et savoirs.
- Pouvoirs, institutions, droits et frontières.
- Migrations, échanges et circulations.
- Économies, travail, techniques et ressources.
- Conflits, résistances et transformations politiques.
- Environnements, territoires et relations entre humains et milieux.

**Les religions constituent un chapitre majeur et transversal**, étudié avec respect et rigueur : les affirmations de foi sont distinguées des conclusions historiques.

## Navigation en monde 2D

**Parcours central : désigner un point historique précis et documenté sur la carte mondiale, choisir une époque, puis se balader dans une scène locale 2D.** L'avatar explore les lieux et ouvre des fiches de sources à proximité des points d'intérêt. Retour à la carte mondiale à tout moment. Les scènes reconstituées sont identifiées comme telles et ne constituent pas des preuves historiques.

Voir [la spécification de navigation 2D](docs/navigation-2d.md). Le moteur de promenade n'est pas encore développé.

## Direction artistique

**Style retenu : bande dessinée historique (style 5).** La promenade 2D utilisera des décors illustrés, lumineux, riches et lisibles, avec des personnages expressifs aux proportions crédibles. La direction visuelle évite le pixel art, le photoréalisme et les personnages trop enfantins. Les reconstitutions demeurent explicitement distinguées des faits attestés.

Voir [la direction artistique](docs/direction-artistique.md).

## Expérience de consultation

L'interface privilégie une **identité claire, lumineuse et compréhensible** : carte interactive, chronologie, recherche, filtres et fiches documentaires.

Une fiche doit pouvoir indiquer :
- le titre et la nature de la source ;
- son auteur ou institution d'origine ;
- le lien vers la ressource originale ;
- les lieux et périodes associés, avec leurs incertitudes ;
- les dates de création, de publication et de mise en ligne, lorsqu'elles sont connues ;
- la licence, les conditions d'accès et les limites documentaires ;
- les liens vers d'autres documents ou interprétations, avec justification.

La consultation intégrée est envisagée uniquement lorsque les droits et formats le permettent. Le lien vers l'institution d'origine reste prioritaire.

## Un atlas vivant : mises à jour des sources

L'atlas doit s'enrichir au fil des publications et numérisations : archives, bibliothèques, musées, revues scientifiques et autres institutions documentaires.

**Architecture cible** :
1. Connecteurs vers des catalogues et API institutionnels autorisés (selon les cas : OAI-PMH, IIIF, JSON-LD ou API dédiées).
2. Collecte incrémentale planifiée et respectueuse des licences, quotas et conditions d'utilisation.
3. Conservation des métadonnées d'origine, de l'identifiant externe et de la provenance.
4. Détection des doublons, changements, suppressions et erreurs.
5. Contrôle documentaire avant publication ; les liens causaux et interprétations ne sont pas générés automatiquement comme des faits.
6. Affichage des nouvelles sources dans la carte, la chronologie et un espace « Nouvelles sources ».

**Important** : une source publiée aujourd'hui peut documenter un événement ancien. La date de publication de la source et la date de l'événement sont deux champs distincts.

Voir [l'architecture des sources vivantes](docs/sources-vivantes.md).

## Technologie

**Prototype actuellement versionné** :
- Next.js (App Router), React et TypeScript ;
- MapLibre GL JS pour la carte ;
- CSS responsive, orienté mobile.

**Infrastructure envisagée, non encore déployée** :
- Cloudflare Workers pour l'application, sous réserve de validation de la compatibilité et du build ;
- tâches planifiées Cloudflare pour la synchronisation documentaire ;
- base de données persistante, avec PostgreSQL/PostGIS envisagé pour les données géographiques ;
- stockage d'archives uniquement si les droits le permettent.

Le projet ne doit pas exposer de secrets, clés d'API ou identifiants institutionnels dans GitHub.

## Installation locale

Prérequis : Node.js et npm compatibles avec la version de Next.js utilisée.

```bash
npm install
npm run dev
```

Puis ouvrir **http://localhost:3000**.

Pour essayer une compilation de production :

```bash
npm run build
```

Aucun déploiement Cloudflare ni test de production n'est encore attesté par ce dépôt.

## État réel du projet

| Composant | État |
| --- | --- |
| Dépôt GitHub et documentation | Créés |
| Page d'accueil claire et responsive | Code initial présent |
| Carte interactive MapLibre | Code initial présent ; fonctionnement à tester |
| Chapitres thématiques | Présentation initiale ; navigation à développer |
| Catalogue de sources réelles | À construire |
| Connexions automatiques aux archives | À développer |
| Base de données documentaire | À développer |
| Recherche, chronologie et fiches sources | À développer |
| Déploiement Cloudflare | À configurer et tester |

Aucun corpus historique vérifié n'est revendiqué à ce stade. Ne pas présenter de données fictives ou d'exemples non sourcés comme des faits historiques.

## Priorités de développement

1. Vérifier le build, la navigation mobile et la compatibilité Cloudflare.
2. Créer le schéma documentaire (institutions, collections, sources, lieux, périodes, relations, imports).
3. Connecter une première institution documentaire et importer ses métadonnées avec leur provenance.
4. Afficher les sources dans la carte, la chronologie et les fiches.
5. Mettre en place la synchronisation périodique, les contrôles et l'historique des mises à jour.
6. Développer les parcours « Comprendre le présent », notamment le chapitre transversal sur les religions.

## Principes éditoriaux et techniques

- Transparence des sources, des limites et des incertitudes.
- Diversité géographique et linguistique, sans eurocentrisme.
- Respect des droits d'auteur, licences et conditions d'accès.
- Séparation entre documents originaux et interprétations.
- Accessibilité, lisibilité et priorité au mobile.
- Traçabilité des changements et possibilité de corriger ou retirer une notice.

---

**LES HÉRITIERS — Explorer les sources pour comprendre comment notre monde s'est construit.**
