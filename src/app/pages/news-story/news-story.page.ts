import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.newsArticle = JSON.parse(`{
      "title": "How Silicon Valley Bank Avoided Oversight",
      "description": "Before the collapse, its CEO lobbied for a loosening of Dodd-Frank reforms, risking financial stability.",
      "url": "https://www.wsj.com/articles/how-silicon-valley-bank-avoided-oversight-fdic-systemic-risk-midsize-greg-becker-dodd-frank-reporting-lobbying-5b3ff837",
      "urlToImage": "https://cdn2.thecatapi.com/images/zcErB6rHb.jpg",
      "content": "William A. Galston writes the weekly Politics &amp; Ideas column in the Wall Street Journal. He holds the Ezra K. Zilkha Chair in the Brookings Institutions Governance Studies Program, where he serve… [+1031 chars]"
      }`);
  }

  openHomepage(URL: string) {
    window.open(this.url, '_blank');
  }
}