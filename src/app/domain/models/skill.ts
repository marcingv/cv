export interface Skill {
  name: string;
  description?: string;
  category?:
    | 'frontend'
    | 'frontend-testing'
    | 'backend'
    | 'backend-testing'
    | 'methodology'
    | 'databases';
  advancementLevel?: number;
}
