import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './news-story.page.html',
})
export class NewsStoryPage implements OnInit {
  newsArticle: any | null = null;
  id = "";
  url = ""

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router?.getCurrentNavigation()?.extras.state) {
        this.newsArticle = this.router?.getCurrentNavigation()?.extras?.state?.["story"];
      }
    });
  }

  ngOnInit() {

  }

  openHomepage(URL: string) {
    window.open(this.url, '_blank');
  }
}



