export {};
interface DevKeys {
  [key: string]: string | undefined;
}
const devKeys: DevKeys = {
  port: '4000'
};
module.exports = devKeys;
