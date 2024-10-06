import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonImg,
  IonIcon,
  IonCard,
  IonButton,
  IonText,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { FeedPostService } from '../../services/feed-post.service';
import { FeedPost } from '../../models/feed-post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonText,
    IonButton,
    IonCard,
    IonIcon,
    IonImg,
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonList,
  ],
})
export class AllPostsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll?: IonInfiniteScroll;

  allLoadedPosts: FeedPost[] = [];
  numberOfPosts = 5;
  skipPosts = 0;

  private feedPostService = inject(FeedPostService);

  ngOnInit() {
    this.getPosts('', true);
  }

  getPosts(event: any, isInitialLoad: boolean = false) {
    if (this.skipPosts === 20) {
      event.target.disabled = true;
    }
    this.feedPostService
      .getSelectedPosts(this.numberOfPosts, this.skipPosts)
      .subscribe({
        next: (posts: FeedPost[]) => {
          posts.forEach((post) => {
            this.allLoadedPosts.push(post);
          });
          if (!isInitialLoad) {
            event.target.complete();
          }
          this.skipPosts = this.skipPosts + 5;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  loadData(event: any) {
    this.getPosts(event);
  }
}
