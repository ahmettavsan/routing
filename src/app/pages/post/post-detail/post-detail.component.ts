import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post?:Post;
constructor(private activatedRoute:ActivatedRoute,
  private postService:PostService){

}
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.postService.getbyid(id).subscribe((x)=>{
      this.post=x;
    })

    this.activatedRoute.params.subscribe((param:any)=>{
      console.log(param);
      this.postService.getbyid(param.id).subscribe((x)=>{
        this.post=x;
      })
    })
  }

}
