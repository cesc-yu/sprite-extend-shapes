import PolygonPlugin from './polygon';

export default function install({use, utils, registerNodeType}) {
  const {Polygon} = use(PolygonPlugin, null, false);

  class Triangle extends Polygon {
    get points() {
      const [s1, s2] = this.attr('sides');
      const angle = (Math.PI / 180) * this.attr('angle');
      const p0 = [0, 0];
      const p1 = [s1, 0];
      const p2 = [(s2 + 0) * Math.cos(angle), (s2 + 0) * Math.sin(angle)];
      return [p0, p1, p2];
    }
  }

  registerNodeType('triangle', Triangle, false);
  return {Triangle};
}
