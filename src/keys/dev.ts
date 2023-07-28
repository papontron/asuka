export {};
interface DevKeys {
  [key: string]: string | undefined;
}
const devKeys: DevKeys = {
  port: '3000'
};
module.exports = devKeys;
