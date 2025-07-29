import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  dropdownVisible = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleDropdown() {
    if (window.innerWidth <= 768) {
      this.dropdownVisible = !this.dropdownVisible;
    }
  }

  showDropdown() {
    if (window.innerWidth > 768) {
      this.dropdownVisible = true;
    }
  }

  hideDropdown() {
    if (window.innerWidth > 768) {
      this.dropdownVisible = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.dropdownVisible = false;
    }
  }
}
