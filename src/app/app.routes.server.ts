import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', 
    renderMode: RenderMode.Server
  },
  {
    path: 'product',
    renderMode: RenderMode.Server
  },
  {
    path: 'orders',
    renderMode: RenderMode.Server
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Server  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: 'orders/cart',
    renderMode: RenderMode.Server  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: 'orders/confirmation',
    renderMode: RenderMode.Server  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: ':id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
