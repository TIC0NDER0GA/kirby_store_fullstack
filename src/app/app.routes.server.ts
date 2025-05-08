import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', 
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product',
    renderMode: RenderMode.Server
  },
  {
    path: 'orders',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Server  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: 'orders/cart',
    renderMode: RenderMode.Prerender  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: 'orders/confirmation',
    renderMode: RenderMode.Prerender  // Or RenderMode.Hybrid if you need SSR
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
