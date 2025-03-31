import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {
  // Dados das notícias
  newsList = [
    { 
      title: 'Novo Episódio Lançado!', 
      description: 'Confira o mais novo anime que está conquistando a todos.', 
      image: 'assets/sung1.jpg',
      link: '#',
      category: 'anime'
    },
    { 
      title: 'One Piece', 
      description: 'One Piece é o mangá de maior sucesso de vendas em todo mundo, com mais de 430 milhões de cópias vendidas ao redor do globo. Escrito e ilustrado por Eiichiro Oda, o mangá conta a história de Monkey D. Luffy, um jovem que sai em busca de um grande tesouro chamado One Piece.', 
      image: 'assets/mangas-one-piece.jpg',
      link: '#',
      category: 'manga'
    },
    { 
      title: 'ANIHIME - SESC GEEK', 
      description: 'O maior evento de anime do Brasil está chegando.', 
      image: 'assets/evento1.jpg',
      link: '#',
      category: 'event'
    },
    { 
      title: 'Dandadan', 
      description: 'Dan Da Dan é um anime que gira em torno de dois estudantes do ensino médio, Momo Ayase e Ken Takakura (também conhecido como Okarun). Momo foi criada por uma família de médiuns e acredita em fantasmas, enquanto Okarun é fissurado por ocultismo e acredita em alienígenas. Eles decidem investigar se suas crenças são reais ou não', 
      image: 'assets/ddd1.jpg',
      link: '#',
      category: 'anime'
    },
    { 
      title: 'Novo Anime Lançado!', 
      description: 'Confira o mais novo anime que está conquistando a todos.', 
      image: 'assets/sung2.jpg',
      link: '#',
      category: 'anime'
    },
  ];

  filteredNews = this.newsList;
  activeCategory = 'all';

  // Filtra as notícias por categoria
  filterCategory(category: string) {
    this.activeCategory = category;
    this.filteredNews = category === 'all' 
      ? this.newsList 
      : this.newsList.filter(news => news.category === category);
  }

  // Função para truncar texto (alternativa ao pipe)
  truncateText(text: string, limit: number = 100): string {
    if (!text) return '';
    if (text.length <= limit) return text;
    
    const lastSpace = text.substring(0, limit).lastIndexOf(' ');
    return lastSpace > 0 
      ? text.substring(0, lastSpace) + '...' 
      : text.substring(0, limit) + '...';
  }

  // Verifica se a categoria está ativa (para estilização)
  isActiveCategory(category: string): boolean {
    return this.activeCategory === category;
  }

  getCategoryName(category: string): string {
    const names: {[key: string]: string} = {
      'all': 'Todos',
      'anime': 'Animes',
      'manga': 'Mangás',
      'event': 'Eventos'
    };
    return names[category] || category;
  }
}