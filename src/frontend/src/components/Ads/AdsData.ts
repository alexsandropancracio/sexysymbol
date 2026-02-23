// ====================
// TYPES
// ====================
export interface Ad {
  id: string;
  name: string;
  age: number;
  location?: string;
  whatsapp?: string;
  verified?: boolean;
  bio?: string;
  etnia?: string;
  atendimento?: string[];
  lugar?: string[];
  locations?: string[];
  formasPagamento?: string[];
  images: string[];
  videos: string[];
  media: { url: string; type: string; order_index?: number }[];
}

export interface AdMedia {
  id: string;
  url: string;
  type: "image" | "video";
  order_index: number;
}

