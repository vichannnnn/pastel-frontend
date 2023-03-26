const API_URL = import.meta.env['VITE_API_URL'] as string

export interface ImageData {
    id: number;
    src: string;
    alt: string;
    height?: number;
    width?: number;
    prompt?: string;
  }
  
  export const fetchImages = async (page = 1): Promise<{ images: ImageData[]; maxPage: number }> => {
    const response = await fetch(`${API_URL}/get_all?page=${page}`);
    const responseJson = await response.json();
    const data = responseJson['items'];
    const totalItems = responseJson['total']
    const maxPage = Math.ceil(totalItems / responseJson['size']);
    const formattedData: ImageData[] = data.map((item: any) => ({
      id: item.row_id,
      src: item.image,
      alt: item.prompt,
      height: item.height,
      width: item.width,
      prompt: item.prompt
    }));
    return { images: formattedData, maxPage };
  };
  