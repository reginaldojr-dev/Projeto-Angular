import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  standalone: true,
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() anime!: { title: string; description: string; image: string };
}
