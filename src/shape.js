import {draggable} from 'sprite-draggable';
export default function install({BaseSprite, utils}) {
  const {attr, parseColorString} = utils;

  class ShapeAttr extends BaseSprite.Attr {
    constructor(subject) {
      super(subject);
      this.setDefault({
        color: 'transparent',
        fillColor: 'transparent',
        lineWidth: 0,
        lineCap: 'round',
        lineJoin: 'round',
        lineDash: [0, 0],
        lineDashOffset: 0,
        enableCache: false,
      });
    }

    @attr
    set lineWidth(val) {
      this.clearCache();
      this.set('lineWidth', val);
    }

    @attr
    set lineCap(val) {
      this.clearCache();
      this.set('lineCap', val);
    }

    @attr
    set lineJoin(val) {
      this.clearCache();
      this.set('lineJoin', val);
    }

    @attr
    set lineDash(val) {
      this.clearCache();
      this.set('lineDash', val);
    }

    @attr
    set lineDashOffset(val) {
      this.clearCache();
      this.set('lineDashOffset', val);
    }

    @attr
    set fillColor(val) {
      val = parseColorString(val);
      this.clearCache();
      this.set('fillColor', val);
    }
  }

  class Shape extends BaseSprite {
    static Attr = ShapeAttr;

    draggable(option) {
      draggable(this, option);
    }
  }

  return {Shape};
}
