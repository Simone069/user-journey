# Annahmen-Map Version 2 – Zooh!

Teilaufgabe A (Gruppenarbeit in Miro). Dies ist ein **vorbereiteter Entwurf**: Die Gruppe prüft ihn
gegen die Annahmen-Map V1 und die Key-Screen-Tabelle aus 5.1, ergänzt eigene Karten und trägt das
Ergebnis in Miro ein (Frame «Annahmen-Map V2»).

So übertragen Sie es in Miro:
1. Frame der Annahmen-Map V1 duplizieren und «Annahmen-Map V2» nennen.
2. Pro Zeile in Abschnitt 1 eine Karte anlegen (ID + Text), V1-Karten dazunehmen.
3. Karten gemäss Abschnitt 2 in die Matrix (Wichtigkeit × Sicherheit) schieben.
4. Tabelle aus Abschnitt 3 auf das Board übernehmen.
5. Link auf den Frame mit Leserecht für die Lehrperson in die Abgabe legen.

## 1. Annahmen (eine Karte pro Zeile)

| ID | Annahme | Screen |
|----|---------|--------|
| A1 | Besucher finden das QR-Ticket in der App allein und zeigen es am Drehkreuz ohne Hilfe vor. | Mein Ticket |
| A2 | Eine Lehrperson kann die Eintritte für eine ganze Klasse in einem Durchgang bestellen und hat danach für jede Person einen QR-Code. | Gruppenbesuch, Ticket kaufen |
| A3 | Besucher finden auf dem Lageplan den Weg zur nächsten Fütterung ohne Hilfe. | Lageplan, Fütterung |
| A4 | Besucher haben im Zoo nicht überall Mobilfunkempfang; das Ticket muss trotzdem angezeigt werden. | Mein Ticket |
| A5 | Der Scanner am Drehkreuz liest QR-Codes auf Handydisplays schnell genug. | Mein Ticket |
| A6 | Besucher kaufen Tickets lieber in der App als an der Kasse. | Ticket kaufen |
| A7 | Lehrpersonen drucken die QR-Codes zu Hause aus, weil nicht jede Schülerin und jeder Schüler ein Smartphone dabei hat. | Gruppenbesuch |
| A8 | Besucher geben ihre E-Mail-Adresse für das Ticket an. | Ticket kaufen |
| A9 | Die Fütterungszeiten sind für Besucher ein Hauptgrund, den Lageplan zu öffnen. | Fütterung |
| A10 | Besucher verstehen die Begriffe «Ticket», «Lageplan» und «Fütterung» ohne Erklärung. | Startscreen |
| A11 | Besucher bedienen eine Liste mit fünf Links auf dem Startscreen ohne Erklärung. | Startscreen |
| A12 | Besucher nutzen die App im Hochformat. | alle |

Herkunft: A1 und A8 stammen aus dem Aufgabentext 6.1, A5 und A7 aus den Postits der
Design-Studio-Idee (Scanner muss schnell genug sein, zu Hause druckbar), A2 aus der Opportunity Area
«Platz finden für die Gruppe» und der Idee «QR-Code für jede Schüler:in», A3 aus Lageplan und
Fütterung des Aufgabentextes.

## 2. Einordnung in die Matrix

Wichtig = Wenn die Annahme falsch ist, scheitert ein Hauptflow. Sicher = durch Beobachtung oder
Test belegt, nicht Bauchgefühl.

|  | sicher | unsicher |
|--|--------|----------|
| **wichtig** | **Fundament, nicht testen:** A10, A11 | **Zuerst prüfen:** A1, A2, A3 (im Prototyp prüfbar); A4, A5, A6 (nicht im Prototyp prüfbar) |
| **unwichtig** | **Ignorieren:** A12 | **Später, falls Zeit:** A7, A8, A9 |

Warum diese Reihenfolge: A1 bis A3 sind die drei Hauptflows (Eintritt, Gruppenbesuch, Orientierung).
A4 und A5 sind technische Fragen (Empfang, Scanner) und A6 ist eine Marktfrage; die prüft man mit
einem Technik-Check beziehungsweise Interviews, nicht mit dem Klickprototyp. Block 7 testet mit dem
Prototyp, deshalb gehen A1 bis A3 in die Tabelle.

## 3. Die drei wichtigsten unsicheren Annahmen

| Annahme | wichtig? | sicher? | Hypothese | Prüfkriterium |
|---------|----------|---------|-----------|---------------|
| A1: QR-Ticket finden und vorzeigen | hoch (ohne Ticket kein Eintritt) | tief (noch nie getestet) | Wir glauben, dass Besucher das QR-Ticket in der App allein finden und am Drehkreuz vorzeigen können. | Mindestens 4 von 5 Testpersonen schaffen es beim ersten Versuch, ohne Hinweis und in unter 30 Sekunden. |
| A2: Klassenticket in einem Durchgang | hoch (Gruppen sind unsere Zielgruppe) | tief (noch nie getestet) | Wir glauben, dass eine Lehrperson die Eintritte für eine ganze Klasse in einem Durchgang bestellen kann und danach für jede Person einen QR-Code hat. | Mindestens 4 von 5 Testpersonen schaffen es ohne Hilfe, mit höchstens 1 Fehlversuch und in unter 3 Minuten. |
| A3: Weg zur Fütterung | hoch (Orientierung ist der Zweck des Lageplans) | tief (noch nie getestet) | Wir glauben, dass Besucher auf dem Lageplan den Weg zur nächsten Fütterung ohne Hilfe finden. | Mindestens 4 von 5 Testpersonen starten die Route in höchstens 3 Taps und unter 45 Sekunden. |

## 4. Zusatz: Testszenario pro Hypothese

Als Aufgabe an die Testperson formuliert, nicht als Klickanleitung.

| Hypothese | Testszenario | Screen im Code |
|-----------|--------------|----------------|
| H1 | «Sie stehen am Drehkreuz des Zoos. Zeigen Sie dem Drehkreuz Ihr Ticket.» | `src/app/tickets.tsx` |
| H2 | «Sie besuchen mit Ihrer Klasse von 24 Schülerinnen und Schülern den Zoo. Besorgen Sie die Eintritte für alle.» | `src/app/gruppenbesuch.tsx` |
| H3 | «Sie möchten die nächste Fütterung sehen. Finden Sie den Weg dorthin.» | `src/app/lageplan.tsx`, `src/app/fuetterung.tsx` |

Im Code steht in diesen Dateien als erste Zeile ein Kommentar `// H1: …`, `// H2: …` beziehungsweise `// H3: …`.
