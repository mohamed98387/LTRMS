// Table data
export interface Table {
  name: string;
  description: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
