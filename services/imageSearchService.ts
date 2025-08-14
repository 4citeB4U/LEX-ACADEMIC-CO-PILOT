interface ImageSearchResult {
  title: string;
  link: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  snippet: string;
  source: string;
}

interface SearchResponse {
  items: ImageSearchResult[];
  searchInformation: {
    totalResults: string;
    searchTime: number;
  };
}

class ImageSearchService {
  // Google Custom Search API removed; only fallback/embed logic remains

  // Generate fallback images based on search query
  private generateFallbackImages(query: string): ImageSearchResult[] {
    const baseQuery = query.toLowerCase();
    const fallbackImages = [
      {
        title: `${query} - Research Diagram`,
        link: `https://via.placeholder.com/300x300/6366f1/ffffff?text=${encodeURIComponent(query)}`,
        image: {
          src: `https://via.placeholder.com/300x300/6366f1/ffffff?text=${encodeURIComponent(query)}`,
          width: 300,
          height: 300
        },
        snippet: `Visual representation of ${query} research topic`,
        source: 'LEX Research System'
      },
      {
        title: `${query} - Analysis Chart`,
        link: `https://via.placeholder.com/300x300/8b5cf6/ffffff?text=${encodeURIComponent(query + ' Chart')}`,
        image: {
          src: `https://via.placeholder.com/300x300/8b5cf6/ffffff?text=${encodeURIComponent(query + ' Chart')}`,
          width: 300,
          height: 300
        },
        snippet: `Analytical chart for ${query} research`,
        source: 'LEX Research System'
      },
      {
        title: `${query} - Infographic`,
        link: `https://via.placeholder.com/300x300/ec4899/ffffff?text=${encodeURIComponent(query + ' Info')}`,
        image: {
          src: `https://via.placeholder.com/300x300/ec4899/ffffff?text=${encodeURIComponent(query + ' Info')}`,
          width: 300,
          height: 300
        },
        snippet: `Comprehensive infographic for ${query}`,
        source: 'LEX Research System'
      }
    ];

    return fallbackImages;
  }

  async searchImages(query: string, maxResults: number = 6): Promise<ImageSearchResult[]> {
    // Always use fallback images (free mode)
    return this.generateFallbackImages(query);
  }

  async searchWebAndImages(query: string, maxResults: number = 4): Promise<{
    webResults: any[];
    imageResults: ImageSearchResult[];
  }> {
    // Always use fallback data (free mode)
    return {
      webResults: [],
      imageResults: this.generateFallbackImages(query)
    };
  }

  // Generate relevant image search queries based on research topic
  generateImageQueries(topic: string): string[] {
    const baseQuery = topic.toLowerCase();
    const imageQueries = [
      `${baseQuery} diagram`,
      `${baseQuery} chart`,
      `${baseQuery} infographic`,
      `${baseQuery} illustration`,
      `${baseQuery} photo`,
      `${baseQuery} example`
    ];
    
    return imageQueries.slice(0, 3); // Return top 3 most relevant queries
  }

  // Test method to verify API connection
  async testConnection(): Promise<boolean> {
    // No external API to test in free mode
    return true;
  }
}

// Env typings moved to src/vite-env.d.ts

export const imageSearchService = new ImageSearchService();
export type { ImageSearchResult, SearchResponse };
