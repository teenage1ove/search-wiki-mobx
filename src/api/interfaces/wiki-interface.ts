export interface WikiResponse {
    batchcomplete: string;
    continue: Continue;
    query: Query;
  }
  
  export interface Query {
    searchinfo: Searchinfo;
    search: SearchWikisRes[];
  }
  
  export interface SearchWikisRes {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: string;
  }
  
  export interface Searchinfo {
    totalhits: number;
    suggestion: string;
    suggestionsnippet: string;
  }
  
  export interface Continue {
    sroffset: number;
    continue: string;
  }