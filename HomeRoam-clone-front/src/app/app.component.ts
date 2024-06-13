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
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/navbar/footer/footer.component';
import { ToastService } from './shared/Services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule,FontAwesomeModule,NavbarComponent,FooterComponent,ToastModule],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary=inject(FaIconLibrary);
  isListingView = true;
  toastService = inject(ToastService);
  messageService = inject(MessageService);
  ngOnInit(): void {
      this.initFontAwesome();
  }

  private initFontAwesome():void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if(newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage);
        }
      }
    })
  }

}
