# Navigation : choisir un point, puis explorer en 2D

## Boucle principale

1. Depuis une carte du monde, l'utilisateur désigne **un point historique précis et documenté** (site, monument, quartier, lieu d'événement), et non un simple point arbitraire.
2. Il choisit une époque parmi les périodes documentées pour ce lieu, y compris le présent. Les périodes sans scène ou sans sources disponibles sont signalées.
3. L'application charge une scène 2D locale **rattachée à ce lieu et à cette époque**, dans le style bande dessinée historique, et y place un avatar.
4. Il se déplace librement (clavier sur ordinateur ; contrôles tactiles sur mobile).
5. À proximité d'un point d'intérêt, il peut ouvrir une fiche documentaire reliée à une ou plusieurs sources institutionnelles.
6. Il revient à la carte mondiale à tout moment.

## Séparation essentielle

- **Carte mondiale** : sélection d'un lieu, non déplacement à l'échelle planétaire.
- **Scène locale** : promenade 2D, éventuellement reconstituée.
- **Dossier documentaire** : sources authentiques, provenance, droits, dates et incertitudes.

Les scènes reconstituées doivent être signalées comme telles. Un bâtiment, personnage, objet ou événement ne doit pas être présenté comme historiquement attesté sans source. Éviter les éléments fictifs susceptibles d'être pris pour des faits.

## Modèle de données cible

- locations(id, name, geometry, spatial_uncertainty)
- scenes(id, location_id, period_start, period_end, scene_version, reconstruction_status, attribution)
- scene_objects(id, scene_id, type, x, y, label, evidence_status)
- scene_object_sources(scene_object_id, source_id, relation_type, justification)
- source_records : voir docs/sources-vivantes.md

Les points historiques sont géolocalisés avec leur degré de précision et associés à des sources vérifiables. Un lieu peut avoir plusieurs scènes temporelles. Une source peut concerner plusieurs lieux et périodes.

## Première tranche jouable

Carte mondiale → choix d'un point → scène locale 2D → déplacement du personnage → interaction avec un point d'intérêt → fiche source → retour à la carte.

Pour tester les déplacements sans fabriquer d'histoire, commencer par une **scène générique explicitement illustrative**, puis intégrer un premier lieu réel après vérification de ses sources.

## Actualisation documentaire

Les nouveaux documents peuvent enrichir les fiches sans modifier automatiquement la géographie ou les décors. Toute modification d'une reconstitution nécessite une validation distincte.

## État

Spécification fonctionnelle enregistrée ; moteur de scène 2D et interactions encore à développer.
