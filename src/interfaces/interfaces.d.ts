interface CervezaData {
  nombre: string;
  descripcion: string;
  color_id: number;
  graduacion_id: number;
  tipo_id: number;
  pais_id: number;
  novedad: boolean | number;
  oferta: boolean | number;
  precio: number;
  foto: string;
  marca: string;
  file: File | null;
  color:string;
  tipo:string;
  graduacion:string;
  pais:string;
  formato:string;
  unidades:number;
  stock:number;
}






export interface Cerveza {
  id: number
  nombre: string
  descripcion: string
  novedad: number
  oferta: number
  precio: string
  foto: string
  marca: string
  color: string
  graduacion: string
  tipo: string
  pais: string
}
  

  export interface Pais {
    id: number
    nombre: string
    descripcion:string
    created_at: any
    updated_at: any
  }
  
  

  export interface Tipo {
    id: number
    nombre: string
    descripcion: string
    created_at: any
    updated_at: any
  }
  
  export interface Color {
    id: number
    nombre: string
    created_at: any
    updated_at: any
  }
  
  export interface Graduacion {
    id: number
    nombre: string
    created_at: any
    updated_at: any
  }

  export interface TiposData {
    current_page: number
    data: Tipo[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: any
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
    export interface Link {
    url?: string
    label: string
    active: boolean
  }
  
  export interface PaisesData {
    current_page: number
    data: Pais[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: any
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  