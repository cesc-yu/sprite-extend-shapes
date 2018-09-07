import EllipseSectorPlugin from './ellipseSector';

export default function install({use, utils, registerNodeType}) {
  const {attr, flow, parseColorString, findColor} = utils;

  const {EllipseSector} = use(EllipseSectorPlugin, null, false);

  class Sector extends EllipseSector {
    get radiuses() {
      return [this.attr('radius'), this.attr('radius')];
    }
  }

  registerNodeType('sector', Sector, false);
  return {Sector};
}
