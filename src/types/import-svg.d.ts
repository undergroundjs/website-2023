// Fixes the TS error on LogoLarge import on the index.tsx page
declare module "*.svg" {
  const value: any;
  export default value;
}
