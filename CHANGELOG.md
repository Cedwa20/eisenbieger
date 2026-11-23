# Versionshistorie – Eisenbieger

Alle wichtigen Änderungen an der Fitness-App werden hier dokumentiert. Die Versionsnummern wurden am 23.11.2026 rückwirkend für die bisherigen Veröffentlichungen eingeführt.

Die produktive App liegt unter [Eisenbieger](https://cedwa20.github.io/eisenbieger/), die getrennte Testversion unter [Eisenbieger DEV](https://cedwa20.github.io/eisenbieger/dev/).

## [1.3.0] – 2026-11-23
### Neu
- Im Menü **Statistik → Verlauf** besitzt jedes gespeicherte Training einen eigenen Options-Button (`⋮`).
- Detailansicht mit Übungen, Sätzen, Gewichten, Wiederholungen, Datum und Trainingsdauer.
- Gespeicherte Trainings können nachträglich bearbeitet werden: Name, Datum, Dauer, Übungs- und Satzwerte.
- Einzelne Trainings lassen sich nach Sicherheitsabfrage löschen.
### Verbessert
- Gesamtstatistiken und persönliche Rekorde werden nach Änderungen am Verlauf neu berechnet.
- Die App erinnert nach nachträglichen Änderungen an eine neue Datensicherung.

## [1.2.0] – 2026-11-23
### Darstellung
- Übungsbilder mit **1,5-facher Auflösung pro Bildachse** (klein: 72 × 51 statt 48 × 34 Pixel; groß und animiert: 144 × 102 statt 96 × 68 Pixel).
- Feinere Konturen bei beibehaltenem Retro-/Pixel-Art-Stil.
- Die globale Pixel-Darstellung wurde auf relevante Grafiken begrenzt, damit Schrift nicht unnötig grob erscheint.
### Bedienung
- **„Verlauf löschen“** im Menü **Mehr** an das Ende der Einstellungen verschoben.

## [1.1.0] – 2026-11-23
### Stabilität und Datensicherung
- Der Untätigkeitszeitpunkt eines aktiven Trainings bleibt nach einem Neustart erhalten.
- Gewichte und Wiederholungen können während einer Trainingspause nicht mehr verändert werden.
- Ein Backup wird erst nach Bestätigung des gespeicherten Downloads beziehungsweise erfolgreichem Teilen als erledigt markiert.
- Service Worker: Offline-Fallback auf Seitennavigationen begrenzt; erfolgreiche gleichursprüngliche Ressourcen werden zwischengespeichert und Cache-Fehler besser abgefangen.

## [1.0.0] – 2026-11-18
### Ausgangsversion
- Fitness-Tracker als installierbare, offlinefähige Web-App mit lokal gespeicherten Trainingsdaten.
- Trainingspläne, Übungsbibliothek und laufende Workouts mit Satz-, Gewichts- und Wiederholungserfassung.
- Pausentimer, Trainingshistorie, Statistiken und persönliche Rekorde.
- Pixel-Art-Oberfläche mit Übungsillustrationen und Bewegungsanimationen.
- JSON-Datensicherung und Import.

---

## Entwicklungs- und Veröffentlichungsablauf
- `development`: Weiterentwicklung und Funktionstests.
- `gh-pages/dev/`: separat installierbare DEV-Version mit getrenntem lokalen Datenspeicher.
- `main`: freigegebener Quellstand der Haupt-App.
- `gh-pages/`: Veröffentlichung der Haupt-App; enthält zugleich die DEV-Version im Unterordner `dev/`.

Neue Versionen werden künftig **nach Freigabe** mit Datum, Versionsnummer und den wesentlichen Änderungen hier ergänzt. Einträge zur Ausgangsversion beschreiben den Funktionsumfang des vorhandenen Releases, nicht zwingend den Zeitpunkt jeder einzelnen Funktionsentwicklung.
