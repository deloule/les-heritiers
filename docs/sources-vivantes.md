# Sources vivantes — architecture documentaire

LES HÉRITIERS est un atlas de références documentaires, non une autorité historique.

## Temporalité

Chaque notice distingue :
- la date ou période de l'objet ou événement documenté ;
- la date de création de la source ;
- la date de publication ou de numérisation ;
- la date de dernière récupération et de vérification.

## Connecteurs

Un connecteur par fournisseur institutionnel. Priorité aux API et formats autorisés (OAI-PMH, IIIF, Dublin Core, JSON-LD, API institutionnelles). Ne pas aspirer de contenu sans vérifier licences, robots, limites de débit et conditions d'utilisation.

## Pipeline planifié

1. Cloudflare Cron Trigger déclenche une collecte par source.
2. Lecture incrémentale via curseur ou date de modification.
3. Normalisation sans effacer les champs originaux.
4. Déduplication par identifiant stable, URL canonique et provenance.
5. Vérification des métadonnées, de la licence, du contexte géographique et temporel.
6. Enregistrement avec statut : importé, à examiner, publié, retiré.
7. Publication des notices admissibles et conservation de l'historique des changements.

Les interprétations, rapprochements causaux et attributions incertaines exigent une validation documentaire explicite. Une nouvelle source ne doit pas être présentée automatiquement comme une nouvelle vérité historique.

## Schéma minimal

- institutions(id, nom, url)
- collections(id, institution_id, url, protocole, licence)
- sources(id, collection_id, identifiant_externe, url_originale, titre_original, type, langue, droits, date_source, date_publication, date_recuperation, date_modification, statut)
- observations(id, source_id, type, texte_attribue, niveau_certitude)
- lieux(id, nom, geometrie, precision)
- source_lieux(source_id, lieu_id, role)
- periodes(id, debut, fin, precision)
- source_periodes(source_id, periode_id, role)
- relations(id, source_origine_id, source_cible_id, type, justification_source_id)
- imports(id, collection_id, debut, fin, statut, compteur, erreur)

## Interface

- « Explorer le passé »
- « Comprendre le présent »
- « Nouvelles sources »
- « Religions et croyances » (chapitre transversal)

L'interface affiche toujours la provenance, le lien institutionnel, les droits, les dates pertinentes et le statut de validation.

## Statut

Ce document décrit une architecture cible. Les connecteurs, la base de données et les tâches automatiques ne sont pas encore déployés.
