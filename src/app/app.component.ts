import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-assignment';
  homeIcon = faHome;
  calenderIcon = faCalendar;
  leftArrowIcon = faArrowLeft;
  rightArrowIcon = faArrowRight;
  swipMenu: boolean = false;

  ngOnInit(){
  
  }

  toggleMenu(){
    this.swipMenu = !this.swipMenu;
    const body = document.getElementById('left-side');
    const leftLink = document.getElementById('left-link');
    const leftLink1 = document.getElementById('left-link1');
    const mainPage = document.getElementById('main-page');
    if(this.swipMenu === true){
      body.classList.add('fullWidth');
      body.classList.remove('halfWidth');
      leftLink.classList.add('left-side-link-add');
      leftLink.classList.remove('left-side-link-remove');
      leftLink1.classList.add('left-side-link-add');
      leftLink1.classList.remove('left-side-link-remove');

      mainPage.classList.add("main-page-container-add");
      mainPage.classList.remove("main-page-container-less");
    } else{
      body.classList.add('halfWidth');
      body.classList.remove('fullWidth');
      leftLink.classList.add('left-side-link-remove');
      leftLink.classList.remove('left-side-link-add');
      leftLink1.classList.add('left-side-link-remove');
      leftLink1.classList.remove('left-side-link-add');

      mainPage.classList.add("main-page-container-less");
      mainPage.classList.remove("main-page-container-add");
    }
  }
}
