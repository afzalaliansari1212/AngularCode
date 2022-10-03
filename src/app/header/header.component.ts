import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list:any[]=[];
  title:any;
  body:any;

  constructor( private api:ServicesService) { }

  ngOnInit(): void {
    this.getAdd()
  }

  getAdd(){
    this.api.getPost().subscribe(res=>{
      this.list=res;
      console.log(res)
    })
  }
  savePost(form:any){
    let formData={
      title:this.title,
      body:this.body,
      userId: 1,
    }
    console.log(formData)
    this.api.addPost(formData).subscribe(res=>{
      this.getAdd()
    })
    form.reset();
  }
  removeItem(id:any){
    this.api.deletePost(id).subscribe(res=>{
      this.getAdd()
      console.log("delete",res)
    })
  }
  editId:any
  editRecord(id:any){
    console.log(id)
    this.editId=id;
    this.list.map(x=> {
      if(x?.id===id){
        this.title=x?.title,
        this.body=x?.body
       
      } 
    })
  }
  editPost(form:any){
    let formData={
      title:this.title,
      body:this.body,
      userId: 1,
    }
    this.api.editPost(this.editId,formData).subscribe(res=>{
      this.getAdd()
      form.reset();
    })
  }
  resetForm(){
    this.editId=null
    this.title=null
    this.body=null
  }
}
