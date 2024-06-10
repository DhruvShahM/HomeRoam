import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
// import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
// import {fontAwesomeIcons} from "./shared/font-awesome-icons";
// import {NavbarComponent} from "./layout/navbar/navbar.component";
// import {FooterComponent} from "./layout/footer/footer.component";
import {ToastModule} from "primeng/toast";
// import {ToastService} from "./layout/toast.service";
import {MessageService} from "primeng/api";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary=inject(FaIconLibrary);

  ngOnInit(): void {
      this.initFontAwesome();
  }

  private initFontAwesome():void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }


}
