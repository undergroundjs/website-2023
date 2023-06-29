// Fixes the TS error on svg imports
declare module "*.svg" {
  const value: any;
  export default value;
}
