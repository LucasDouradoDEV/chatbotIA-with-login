import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { InsightComponent } from '../../components/insight/insight.component';
import { CheckLogin } from '../../core/helpers/CheckLogin';
import { GetInsightDatabase } from '../../core/services/Insight';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    InsightComponent
  ],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})

export class InsightsComponent {
  // listInsights: any;

  listInsights = [
    {
      id: 0,
      horario: '09:00',
      title: ' Lorem ipsum dolor sit amet consectetur posuere massa tortor id. ',
      lead: ' Lorem ipsum dolor sit amet consectetur. Magna in ornare ante in orci semper. Maecenas integer convallis integer tortor ut etiam amet quis nisi. Donec congue vel interdum.'
    },
    {
      id: 1,
      horario: '09:00',
      title: ' Lorem ipsum dolor sit amet consectetur posuere massa tortor id. ',
      lead: ' Lorem ipsum dolor sit amet consectetur. Magna in ornare ante in orci semper. Maecenas integer convallis integer tortor ut etiam amet quis nisi. Donec congue vel interdum.'
    },
    {
      id: 2,
      horario: '09:00',
      title: ' Lorem ipsum dolor sit amet consectetur posuere massa tortor id. ',
      lead: ' Lorem ipsum dolor sit amet consectetur. Magna in ornare ante in orci semper. Maecenas integer convallis integer tortor ut etiam amet quis nisi. Donec congue vel interdum.'
    },
    {
      id: 3,
      horario: '09:00',
      title: ' Lorem ipsum dolor sit amet consectetur posuere massa tortor id. ',
      lead: ' Lorem ipsum dolor sit amet consectetur. Magna in ornare ante in orci semper. Maecenas integer convallis integer tortor ut etiam amet quis nisi. Donec congue vel interdum.'
    },
    {
      id: 4,
      horario: '09:10',
      title: ' Lorem ipsum dolor sit amet consectetur posuere massa tortor id. ',
      lead: ' Lorem ipsum dolor sit amet consectetur. Magna in ornare ante in orci semper. Maecenas integer convallis integer tortor ut etiam amet quis nisi. Donec congue vel interdum.'
    }
  ]  

  async ngAfterViewInit() {
    // this.listInsights = await GetInsightDatabase.get()

    this.main()
  }

  async main() {
    setInterval(async () => {
      this.listInsights = await GetInsightDatabase.get()
      // console.log("ListInsights::Refresh")
    }, 2000);
  }
}
