import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
})
export class MoviesPage implements OnInit {
  movies : any[] = [];
  currentPage = 1;
  data!: any[];

  constructor(
    private movieService: MovieService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    const coordinates =  Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);


    await loading.present();

      this.movieService.getNews("devops").subscribe(data => {
        console.log(data);
        loading.dismiss();
        this.data = data.articles;
        event?.target.complete();
      })



  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}