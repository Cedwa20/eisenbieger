# Eisenbieger – Entwicklungsrichtlinien

## Quellcode und Veröffentlichung
- GitHub-Repository `cedwa20/eisenbieger` ist die maßgebliche Quelle.
- Vor Änderungen aktuellen Quellstand und relevante Dateien abrufen.
- Neue Funktionen grundsätzlich auf `development` umsetzen und die getrennte DEV-App unter `gh-pages/dev/` veröffentlichen.
- Erst nach erfolgreichem Test und ausdrücklicher Freigabe des Nutzers Änderungen nach `main` und in die produktive Veröffentlichung auf `gh-pages` übernehmen. DEV-Unterordner dabei erhalten.
- Ausdrücklich angeordnete direkte Produktivänderungen sind eine Ausnahme.
- Freigegebene Versionen mit Datum, Versionsnummer und Änderungen in CHANGELOG.md dokumentieren. Unveröffentlichte Änderungen als solche kennzeichnen.

## Design und Bedienung
- Dark Mode und konsistente Retro-Pixel-Art-Optik; Lesbarkeit und Funktionalität haben Vorrang.
- Einheitliche Übungsgrafiken und Symbole; anatomische Plausibilität beachten.
- Kurze, nicht blockierende Animationen; reduzierte Bewegung über prefers-reduced-motion respektieren.
- Für Android und mobile Touch-Bedienung optimieren.

## Technische Anforderungen
- Installierbare, offlinefähige PWA erhalten; Manifest, Service Worker und Cache-Aktualisierung bei Veröffentlichungen prüfen.
- Lokale Trainingsdaten, Einstellungen und Backup-Kompatibilität bewahren; DEV- und Produktivdaten getrennt halten.
- Bestehende Funktionen nicht unbeauftragt entfernen oder verändern.
- Trainingslogik, Pausentimer, Untätigkeitserkennung, Statistiken und Rekordberechnung auf Wechselwirkungen prüfen.
- Destruktive Aktionen mit Bestätigung absichern.
- Kleine, nachvollziehbare Commits; keine Zugangsdaten oder persönlichen Trainingsdaten ins Repository aufnehmen.
- Geänderten Code soweit möglich testen; nicht durchgeführte Tests offen benennen.

## Zusammenarbeit
- Verbesserungsvorschläge sind erwünscht; optionale neue Funktionen nicht ohne Auftrag umsetzen.
- Nach Änderungen kompakt beschreiben, was umgesetzt, geprüft und veröffentlicht wurde.
- Implementierung, Veröffentlichung und tatsächlichen Smartphone-Test klar unterscheiden.
- ROADMAP.md als Planungsübersicht pflegen; Vorschläge sind keine Freigabe.
