declare const requireContext: {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
      <T>(id: string[]): T;
      resolve(id: string): string;
      id: string;
    };
  };
  
export default requireContext;
