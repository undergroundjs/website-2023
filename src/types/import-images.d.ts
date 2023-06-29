// Fixes the TS errors on image extension imports
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}
