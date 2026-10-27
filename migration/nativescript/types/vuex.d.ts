// Vuex 4.1.0's export map omits its shipped declaration entry under bundler resolution.
declare module 'vuex' {
  export * from 'vuex/types/index.d.ts';
  export { default } from 'vuex/types/index.d.ts';
}
