// ====================
// TYPES
// ====================
export interface Ad {
  id: string;
  name: string;
  age: number;
  location?: string;
  contato?: string;
  verified?: boolean;
  cover?: string;
  bio?: string;
  etnia?: string;
  atendimento?: string[];
  lugar?: string[];
  locations?: string[];
  formasPagamento?: string[];
  services?: string[];
  images: string[];
  videos: string[];
    media: {
    url: string;
    type?: string;
    is_cover?: boolean;
  }[];
}

export interface AdMedia {
  id: string;
  url: string;
  type: "image" | "video";
  order_index: number;
}

