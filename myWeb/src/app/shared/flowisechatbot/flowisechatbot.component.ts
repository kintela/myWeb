import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowisechatbot',
  templateUrl: './flowisechatbot.component.html',
  styleUrls: ['./flowisechatbot.component.scss']
})
export class FlowisechatbotComponent implements OnInit, OnDestroy{
  private chatbot: any;

  constructor() {}

   ngOnInit(): void {
    this.loadScript();
  }
  ngOnDestroy(): void {}

  loadScript(): void {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
    script.type = 'module';
    document.body.appendChild(script);
    script.onload = () => {
      this.waitForChatbot();
    };
  }

  waitForChatbot(): void {
    const checkExist = setInterval(() => {
      if ((window as any).Chatbot) {
        clearInterval(checkExist);
        this.initializeChatbot();
      }
    }, 100); // Verifica cada 100 ms
  }

  initializeChatbot(): void {
    const Chatbot = (window as any).Chatbot;
    if (Chatbot) {
      Chatbot.init({
        chatflowid: 'f1ab9b3d-3698-4fdb-acba-0c0800634206',
        apiHost: 'http://localhost:3000',
      });
    }
  }
}
