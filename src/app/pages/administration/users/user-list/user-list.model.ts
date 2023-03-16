// Table data
export interface Table {
  name: string;
  login: string;
  role: string;
  organization: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
