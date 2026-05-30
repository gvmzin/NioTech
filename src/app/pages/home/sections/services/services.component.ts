// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionLabelComponent } from '../../../../shared/components/section-label/section-label.component';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

interface ServiceItem {
  title: string;
  description: string;
  icon: string; // identificador do ícone
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionLabelComponent, AnimateOnScrollDirective],
  template: `
    <section class="services section-padding" id="servicos">
      <div class="container">
        <!-- Cabeçalho da Seção -->
        <div class="section-header" appAnimateOnScroll>
          <app-section-label text="o que fazemos"></app-section-label>
          <h2 class="section-title">Soluções que simplificam, otimizam e escalam negócios</h2>
          <p class="section-subtitle">
            Construímos o motor tecnológico por trás da sua eficiência operacional, focando em resultados que você consegue medir.
          </p>
        </div>

        <!-- Grid de Serviços -->
        <div class="services-grid">
          <div
            class="service-card"
            *ngFor="let service of services; let idx = index"
            appAnimateOnScroll
            [delay]="(idx * 100) + 'ms'">

            <div class="card-icon">
              <!-- Software Sob Medida: code-2 -->
              <svg *ngIf="service.icon === 'code'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 16 4-4-4-4"/>
                <path d="m6 8-4 4 4 4"/>
                <path d="m14.5 4-5 16"/>
              </svg>
              <!-- Sites de Alta Performance: zap -->
              <svg *ngIf="service.icon === 'rocket'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <!-- Automação de Processos: settings (gear) -->
              <svg *ngIf="service.icon === 'bot'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <!-- Integrações de Sistemas: git-merge -->
              <svg *ngIf="service.icon === 'plug'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="18" r="3"/>
                <circle cx="6" cy="6" r="3"/>
                <path d="M6 21V9a9 9 0 0 0 9 9"/>
              </svg>
              <!-- Dashboards e Relatórios: bar-chart-2 -->
              <svg *ngIf="service.icon === 'chart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <!-- Suporte Técnico Ágil: headphones -->
              <svg *ngIf="service.icon === 'headset'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
              </svg>
            </div>

            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-desc">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'variables';
    @import 'mixins';

    .services {
      background-color: $color-bg-white;
    }

    .section-header {
      margin-bottom: clamp(3rem, 6vw, 4.5rem);
      max-width: 680px;
    }

    .section-title {
      margin-top: 0.5rem;
      margin-bottom: 1.25rem;
    }

    .section-subtitle {
      color: $color-text-more-muted;
      font-size: 1.05rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }

      @include desktop {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }

    .service-card {
      background-color: $color-bg-light;
      border: 1px solid $color-border;
      border-radius: 12px;
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include transition-smooth;

      &:hover {
        background-color: $color-bg-white;
        border-color: $color-primary;
        transform: translateY(-4px);
        box-shadow: $shadow-primary;

        .card-icon {
          background-color: $color-primary;
          color: $color-white;
          border-color: $color-primary;
          transform: scale(1.05);
        }
      }
    }

    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: 10px;
      background-color: $color-icon-bg;
      color: $color-icon-color;
      @include flex-center;
      margin-bottom: 1.5rem;
      border: 1px solid $color-icon-border;
      @include transition-smooth;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .card-title {
      font-family: $font-display;
      font-size: 1.2rem;
      font-weight: 700;
      color: $color-heading;
      margin-bottom: 0.85rem;
    }

    .card-desc {
      font-family: $font-body;
      font-size: 0.95rem;
      color: $color-text-more-muted;
      line-height: 1.6;
    }
  `]
})
export class ServicesComponent {
  public readonly services: ServiceItem[] = [
    {
      title: 'Software Sob Medida',
      description: 'Sistemas web robustos construídos sob medida para a sua operação. Do desenho da arquitetura à entrega final de APIs e painéis seguros.',
      icon: 'code'
    },
    {
      title: 'Sites de Alta Performance',
      description: 'Lançamos sites rápidos estruturados para SEO técnico que convertem visitantes em clientes e carregam em milissegundos no celular.',
      icon: 'rocket'
    },
    {
      title: 'Automação de Processos',
      description: 'Elimine tarefas repetitivas, digitação manual e planilhas confusas com robôs de RPA e integrações de rotina automáticas.',
      icon: 'bot'
    },
    {
      title: 'Integrações de Sistemas',
      description: 'Conectamos seus sistemas de faturamento, CRM, gateways de pagamento e a API do WhatsApp Business para centralizar e agilizar a informação.',
      icon: 'plug'
    },
    {
      title: 'Dashboards e Relatórios',
      description: 'Centralize dados contábeis, logs operacionais e históricos financeiros em painéis de BI interativos atualizados em tempo real.',
      icon: 'chart'
    },
    {
      title: 'Suporte Técnico Ágil',
      description: 'Time de desenvolvedores focado em resolver problemas rapidamente, prestando suporte preventivo contínuo de forma parceira.',
      icon: 'headset'
    }
  ];
}
