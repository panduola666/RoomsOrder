declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  const fetchAPI: any;
  export {
    fetchAPI,
    component
  };
}