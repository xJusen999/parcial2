import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes.component';
import { ListAnimesComponent } from './list-animes/list-animes.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimesComponent, ListAnimesComponent, AnimeDetailComponent],
  exports: [AnimesComponent]
})
export class AnimesModule { }
