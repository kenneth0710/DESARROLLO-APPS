export interface ComponenteInfo {
  slug: string;
  nombre: string;
  tag: string;
}

export const LISTA_COMPONENTES: ComponenteInfo[] = [
  { slug: 'acordeon', nombre: 'Acordeón', tag: 'ion-accordion' },
  { slug: 'hoja-acciones', nombre: 'Hoja de Acciones', tag: 'ion-action-sheet' },
  { slug: 'alerta', nombre: 'Alerta', tag: 'ion-alert' },
  { slug: 'avatar', nombre: 'Avatar', tag: 'ion-avatar' },
  { slug: 'insignia', nombre: 'Insignia', tag: 'ion-badge' },
  { slug: 'migas-pan', nombre: 'Migas de Pan', tag: 'ion-breadcrumbs' },
  { slug: 'botones', nombre: 'Botones', tag: 'ion-button' },
  { slug: 'tarjeta', nombre: 'Tarjeta', tag: 'ion-card' },
  { slug: 'casilla-verificacion', nombre: 'Casilla de Verificación', tag: 'ion-checkbox' },
  { slug: 'chip', nombre: 'Chip', tag: 'ion-chip' },
  { slug: 'fecha-hora', nombre: 'Fecha y Hora', tag: 'ion-datetime' },
  { slug: 'boton-flotante', nombre: 'Botón Flotante', tag: 'ion-fab' },
  { slug: 'cuadricula', nombre: 'Cuadrícula', tag: 'ion-grid' },
  { slug: 'desplazamiento-infinito', nombre: 'Desplazamiento Infinito', tag: 'ion-infinite-scroll' },
  { slug: 'campo-texto', nombre: 'Campo de Texto', tag: 'ion-input' },
  { slug: 'elemento-deslizante', nombre: 'Elemento Deslizante', tag: 'ion-item-sliding' },
  { slug: 'lista', nombre: 'Lista', tag: 'ion-list' },
  { slug: 'indicador-carga', nombre: 'Indicador de Carga', tag: 'ion-loading' },
  { slug: 'menu', nombre: 'Menú', tag: 'ion-menu' },
  { slug: 'modal', nombre: 'Modal', tag: 'ion-modal' },
  { slug: 'popover', nombre: 'Popover', tag: 'ion-popover' },
  { slug: 'barra-progreso', nombre: 'Barra de Progreso', tag: 'ion-progress-bar' },
  { slug: 'radio', nombre: 'Radio', tag: 'ion-radio' },
  { slug: 'rango', nombre: 'Rango', tag: 'ion-range' },
  { slug: 'actualizar', nombre: 'Actualizar (Refresher)', tag: 'ion-refresher' },
  { slug: 'barra-busqueda', nombre: 'Barra de Búsqueda', tag: 'ion-searchbar' },
  { slug: 'segmento', nombre: 'Segmento', tag: 'ion-segment' },
  { slug: 'seleccion', nombre: 'Selección', tag: 'ion-select' },
  { slug: 'interruptor', nombre: 'Interruptor', tag: 'ion-toggle' },
  { slug: 'notificacion-toast', nombre: 'Notificación Toast', tag: 'ion-toast' },
];
