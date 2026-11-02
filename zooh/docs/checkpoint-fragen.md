# Checkpoint-Fragen 6.1

**1. Wie ordnen Sie eine Annahme in die Annahmen-Map ein, und welche prüfen Sie zuerst?**
Jede Annahme bekommt zwei Einschätzungen. Wichtigkeit: Was passiert mit dem Konzept, wenn die Annahme
falsch ist? Scheitert der Hauptflow, ist sie wichtig. Sicherheit: Wie gut wissen wir es? Beobachtung
und Tests machen sicher, Bauchgefühl nicht. Zuerst prüfen wir die Annahmen, die **wichtig und
unsicher** sind. Wichtige, sichere Annahmen sind Fundament und werden nicht getestet.

**2. Was macht aus einer Annahme eine Hypothese mit Prüfkriterium?**
Die Hypothese formuliert die Annahme als «Wir glauben, dass …». Das Prüfkriterium legt vor dem Test
zählbar fest, woran wir merken, dass sie stimmt, zum Beispiel «mindestens 4 von 5 Testpersonen
schaffen es beim ersten Versuch ohne Hinweis». Ohne Zahl lässt sich das Ergebnis später nicht
eindeutig auswerten.

**3. Wie wird aus einer Datei in `src/app/` eine Route, und wozu dient `_layout.tsx`?**
Mit expo-router ist jede Datei in `src/app/` automatisch eine Route, der Dateiname ist der Pfad
(`lageplan.tsx` wird zu `/lageplan`, `index.tsx` zu `/`). Die Datei braucht einen `export default`.
`_layout.tsx` ist selbst keine Seite, sondern legt fest, wie die Screens zusammenhängen. Bei uns ist
es ein Stack mit Titel pro Screen und Zurück-Pfeil in der Kopfzeile.

**4. Warum bleibt der Klickprototyp bewusst Low-Fi?**
Solange Fragen zum Flow offen sind, soll nur Struktur und Ablauf getestet werden. Graue Platzhalter
und Stichworte lenken nicht ab. Mit fertiger Gestaltung würden Testpersonen später Farben und Bilder
kommentieren statt den Ablauf, und wir würden Zeit in Details stecken, die sich nach dem Test noch ändern.
