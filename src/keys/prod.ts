export {};
interface ProdKeys {
  [key: string]: string | undefined;
}
const prodKeys: ProdKeys = {
  port: process.env.PORT
};
module.exports = prodKeys;
