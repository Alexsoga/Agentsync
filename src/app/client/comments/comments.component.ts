import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
 
})
export class CommentsComponent implements OnInit {
  comment: any;
  commentForm: NgForm;
  orderprice:any;
  constructor(private cli: ClientService) { }


  ngOnInit() {

    this.cli.bscomment.subscribe(comment => { this.comment = comment });
    this.cli.bsorderprice.subscribe(orderprice => { this.orderprice = orderprice });
  }
  updateComments(commentForm: NgForm) {

    var comment = commentForm.controls['comment'].value;
    this.cli.setcomment(comment);

  }
}

