import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../transfare/products';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(movie: product[] , moviesInput:string): product[] {
    return movie.filter((movies) => movies.media_type.toLowerCase().includes(moviesInput.toLowerCase() ) );
  }

}
