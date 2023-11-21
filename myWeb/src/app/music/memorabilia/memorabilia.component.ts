import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMemorabilia } from 'src/app/data/IMemorabilia';
import { memorabilias } from 'src/app/data/memorabilias';

@Component({
  selector: 'app-memorabilia',
  templateUrl: './memorabilia.component.html',
  styleUrls: ['./memorabilia.component.scss']
})
export class MemorabiliaComponent implements OnInit {
  memorabilias=memorabilias
  searchText = '';
  filteredMemorabilias: IMemorabilia[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredMemorabilias = memorabilias
  }

  applyFilter() {
    this.filteredMemorabilias = memorabilias.filter(item => 
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }
  
}
