import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-list-animes', 
  templateUrl: './list-animes.component.html',
  styleUrls: ['./list-animes.component.css']
})
export class ListAnimesComponent implements OnInit {
  animes: Anime[] = [];
  averageRating: number = 0;
  totalEpisodes: number = 0;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
      this.calculateSummary();
    });
  }

  calculateSummary(): void {
    if (this.animes.length > 0) {
      const totalRating = this.animes.reduce((sum, anime) => sum + anime.rating, 0);
      this.totalEpisodes = this.animes.reduce((sum, anime) => sum + anime.episodes, 0);
      this.averageRating = totalRating / this.animes.length;
    }
  }
}
