import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { ChatSobreEventoComponent } from './pages/chat-sobre-evento/chat-sobre-evento.component';
import { ChatPalestraComponent } from './pages/chat-palestra/chat-palestra.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { ChatServicosSenaiComponent } from './pages/chat-servicos-senai/chat-servicos-senai.component';
import { CreateComponent } from './pages/create/create.component';
import { AddAnotacoesComponent } from './pages/add-anotacoes/add-anotacoes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat-sobre-evento',
        component: ChatSobreEventoComponent
    },
    {
        path: 'chat-palestra',
        component: ChatPalestraComponent
    },
    {
        path: 'chat-servicos-senai',
        component: ChatServicosSenaiComponent
    },
    {
        path: 'insights',
        component: InsightsComponent
    },
    {
        path: 'cronograma',
        component: CronogramaComponent
    },
    {
        path: 'signup',
        component: CreateComponent
    },
    {
        path: 'add-anotacoes',
        component: AddAnotacoesComponent
    }
];
