import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './news.page.html',
})

export class NewsPage implements OnInit {
  movies : any[] = [];
  currentPage = 1;
  data!: any[];
  topic = "devops"

  constructor(
    private newsService: NewsService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });

    await loading.present();

      this.newsService.getNews(this.topic).subscribe(data => {
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

  openDetailsWithState(index:number) {
    console.log("click")
    let navigationExtras: NavigationExtras = {
      state: {
        story: this.data[index]
      }
    };
    this.router.navigate(['news_item'], navigationExtras);
  }
}