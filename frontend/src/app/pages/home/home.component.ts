import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  searchValue: String = '';
  suggestedCats: any = [];
  hidden: boolean = true;

  constructor(
    private catService: CatService,
    private router: Router
  ) { }

  mostSearched() {
    this.router.navigate(['/mais-buscados']);
  }

  // onSearchEntered(value:String) {
  //   this.searchValue=value;

  //   if(this.searchValue !== '') {
  //     this.catService.searchByCatName(this.searchValue).subscribe(data => {
  //       this.suggestedCats=data;
  //       this.hidden=false;
  //     })
  //   } else {
  //     this.hidden=true;
  //   }
  // }
}
