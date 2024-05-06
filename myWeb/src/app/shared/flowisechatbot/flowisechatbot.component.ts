import { AfterViewInit, Component, OnInit } from '@angular/core';

declare global { // Asegura que TypeScript reconozca la variable global
  interface Window { Chatbot: any; }
}

@Component({
  selector: 'app-flowisechatbot',
  templateUrl: './flowisechatbot.component.html',
  styleUrls: ['./flowisechatbot.component.scss']
})
export class FlowisechatbotComponent implements OnInit{
  ngOnInit(): void {
    this.loadScript();
  }

  loadScript() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.onload = () => {
      // Intenta acceder a Chatbot como una propiedad global después de cargar el script
      if (typeof window.Chatbot !== 'undefined') {
        this.initializeChatbot();
      } else {
        console.error('Chatbot is not defined even after script load');
      }
    };
    script.onerror = () => {
      console.error('Error loading the Chatbot script');
    };
    document.head.appendChild(script);
  }
  

  private initializeChatbot() {
    if (window.Chatbot) {
      window.Chatbot.init({
        chatflowid: "f1ab9b3d-3698-4fdb-acba-0c0800634206",
        apiHost: "http://localhost:3000",
        container: document.getElementById('flowise-chatbot-container')
      });
    } else {
      console.error('Chatbot is not defined');
    }
  }

 
  

}
