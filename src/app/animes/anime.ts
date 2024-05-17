export class Anime {
    id: number;
    name: string;
    description: string;
    rating: number;
    episodes: number;
    category: string;
    studio: string;
    img: string;
    
  
    constructor(id: number, name: string, description: string, rating: number, episodes: number, category: string, studio:string, img:string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.rating = rating;
      this.episodes = episodes;
      this.category = category;
      this.studio = studio;
      this.img = img;      
    }
  }
  