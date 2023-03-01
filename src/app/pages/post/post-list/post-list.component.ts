import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts!:Post[];
  constructor(private router:Router,private postService:PostService){
    this.posts=[];
  }
  ngOnInit(): void {
    this.postService.getAll().subscribe((x)=>{
      this.posts=x;
    });
  }
  gotopostcreate(){
    this.router.navigateByUrl('/post-create');

  }
  gotopostcreate2(){
    this.router.navigate(['/post-create']);

  }
  gotopostDetail(id:number){
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate([`/post-detail`,id]);
  }

}
