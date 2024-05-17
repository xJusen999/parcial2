import { TestBed, async,inject } from '@angular/core/testing';

import { AnimeService } from './anime.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Anime', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimeService]
    });
  });
 
  it('should ...', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));
 });