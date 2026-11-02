export type Programmpunkt = { id: string; titel: string; zeit: string };

export const programm: Programmpunkt[] = [
  { id: "pinguine", titel: "Pinguin-Fütterung", zeit: "13:30" },
  { id: "elefanten", titel: "Elefantenbad", zeit: "14:15" },
];

export function findeProgrammpunkt(id: string | undefined) {
  return programm.find((p) => p.id === id);
}
