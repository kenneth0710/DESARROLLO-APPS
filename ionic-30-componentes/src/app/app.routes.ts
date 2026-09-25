import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'acordeon',
    loadComponent: () => import('./pages/acordeon/acordeon.page').then((m) => m.AcordeonPage),
  },
  {
    path: 'hoja-acciones',
    loadComponent: () => import('./pages/hoja-acciones/hoja-acciones.page').then((m) => m.HojaAccionesPage),
  },
  {
    path: 'alerta',
    loadComponent: () => import('./pages/alerta/alerta.page').then((m) => m.AlertaPage),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then((m) => m.AvatarPage),
  },
  {
    path: 'insignia',
    loadComponent: () => import('./pages/insignia/insignia.page').then((m) => m.InsigniaPage),
  },
  {
    path: 'migas-pan',
    loadComponent: () => import('./pages/migas-pan/migas-pan.page').then((m) => m.MigasPanPage),
  },
  {
    path: 'botones',
    loadComponent: () => import('./pages/botones/botones.page').then((m) => m.BotonesPage),
  },
  {
    path: 'tarjeta',
    loadComponent: () => import('./pages/tarjeta/tarjeta.page').then((m) => m.TarjetaPage),
  },
  {
    path: 'casilla-verificacion',
    loadComponent: () => import('./pages/casilla-verificacion/casilla-verificacion.page').then((m) => m.CasillaVerificacionPage),
  },
  {
    path: 'chip',
    loadComponent: () => import('./pages/chip/chip.page').then((m) => m.ChipPage),
  },
  {
    path: 'fecha-hora',
    loadComponent: () => import('./pages/fecha-hora/fecha-hora.page').then((m) => m.FechaHoraPage),
  },
  {
    path: 'boton-flotante',
    loadComponent: () => import('./pages/boton-flotante/boton-flotante.page').then((m) => m.BotonFlotantePage),
  },
  {
    path: 'cuadricula',
    loadComponent: () => import('./pages/cuadricula/cuadricula.page').then((m) => m.CuadriculaPage),
  },
  {
    path: 'desplazamiento-infinito',
    loadComponent: () => import('./pages/desplazamiento-infinito/desplazamiento-infinito.page').then((m) => m.DesplazamientoInfinitoPage),
  },
  {
    path: 'campo-texto',
    loadComponent: () => import('./pages/campo-texto/campo-texto.page').then((m) => m.CampoTextoPage),
  },
  {
    path: 'elemento-deslizante',
    loadComponent: () => import('./pages/elemento-deslizante/elemento-deslizante.page').then((m) => m.ElementoDeslizantePage),
  },
  {
    path: 'lista',
    loadComponent: () => import('./pages/lista/lista.page').then((m) => m.ListaPage),
  },
  {
    path: 'indicador-carga',
    loadComponent: () => import('./pages/indicador-carga/indicador-carga.page').then((m) => m.IndicadorCargaPage),
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then((m) => m.MenuPage),
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then((m) => m.ModalPage),
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then((m) => m.PopoverPage),
  },
  {
    path: 'barra-progreso',
    loadComponent: () => import('./pages/barra-progreso/barra-progreso.page').then((m) => m.BarraProgresoPage),
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio.page').then((m) => m.RadioPage),
  },
  {
    path: 'rango',
    loadComponent: () => import('./pages/rango/rango.page').then((m) => m.RangoPage),
  },
  {
    path: 'actualizar',
    loadComponent: () => import('./pages/actualizar/actualizar.page').then((m) => m.ActualizarPage),
  },
  {
    path: 'barra-busqueda',
    loadComponent: () => import('./pages/barra-busqueda/barra-busqueda.page').then((m) => m.BarraBusquedaPage),
  },
  {
    path: 'segmento',
    loadComponent: () => import('./pages/segmento/segmento.page').then((m) => m.SegmentoPage),
  },
  {
    path: 'seleccion',
    loadComponent: () => import('./pages/seleccion/seleccion.page').then((m) => m.SeleccionPage),
  },
  {
    path: 'interruptor',
    loadComponent: () => import('./pages/interruptor/interruptor.page').then((m) => m.InterruptorPage),
  },
  {
    path: 'notificacion-toast',
    loadComponent: () => import('./pages/notificacion-toast/notificacion-toast.page').then((m) => m.NotificacionToastPage),
  },
];
