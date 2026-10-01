export interface GlossaryTerm {
  title: string;
  description: string;
}

export type GroupedGlossaryData = Record<string, GlossaryTerm[]>;
