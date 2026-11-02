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

---

# Checkpoint-Fragen 6.2

**1. Wann verwenden Sie `Link`, wann `router.push`, und wie kommt ein Wert auf die nächste Seite?**
`Link` ist ein Textlink, der direkt angetippt wird (z. B. Startscreen, Programmliste). `router.push`
braucht man, wenn der Wechsel erst nach einer Aktion oder Prüfung passiert, etwa nach «Jetzt bezahlen».
Ein Wert reist als Parameter mit: `router.push({ pathname: "/tickets", params: { total: String(total) } })`.
Die Zielseite liest ihn mit `useLocalSearchParams()`. Parameter sind immer Text, daher `String(...)`.

**2. Warum ist das Total kein State, und was wäre die Folge?**
Gespeichert wird nur, was die Person eingibt (Anzahl). Das Total ist daraus berechenbar
(`anzahl * PREIS`) und wird bei jedem Rendern neu abgeleitet. Ein eigener State fürs Total müsste bei
jeder Änderung separat nachgeführt werden; wird das vergessen, laufen Anzahl und Total auseinander
und die Person sieht einen falschen Betrag.

**3. Wozu dient das Label, wenn das Feld schon einen Platzhalter hat?**
Der Platzhalter ist nur ein Beispiel («name@beispiel.ch») und verschwindet beim Tippen. Das Label bleibt
sichtbar und sagt, was in das Feld gehört, auch während und nach der Eingabe (und für Screenreader).

**4. Welche zwei Grundsätze der ISO 9241-110 haben Sie im Walkthrough geprüft?**
Selbstbeschreibungsfähigkeit (jeder Screen sagt, wo man ist und was man tun kann) und Fehlertoleranz
(ein Fehler kostet wenig Aufwand und wird verständlich erklärt).
