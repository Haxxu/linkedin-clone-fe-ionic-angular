import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedPost } from '../models/feed-post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedPostService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSelectedPosts(take: number, skip: number) {
    return this.http.get<FeedPost[]>(
      this.apiUrl + '/feed' + `?take=${take}&skip=${skip}`
    );
  }
}
