import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';

// packages
import '@jswork/next-camelize';
import '@jswork/next-capitalize';
import '@jswork/next-classify';
import '@jswork/next-compact-object';
import '@jswork/next-date';
import '@jswork/next-deep-assign';
import '@jswork/next-deep-clone';
import '@jswork/next-deep-each';
import '@jswork/next-deep-equal';
import '@jswork/next-empty';
import '@jswork/next-get2get';
import '@jswork/next-is-empty-object';
import '@jswork/next-is-plain-object';
import '@jswork/next-kebab-case';
import '@jswork/next-key-map';
import '@jswork/next-param';
import '@jswork/next-qs';
import '@jswork/next-sets';
import '@jswork/next-json';

const defaults = {};

const NxNodeToolkits = nx.declare('nx.NodeToolkits', {
  statics: {
    create: function (inOptions) {
      return new this(inOptions);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, defaults, inOptions);
      this.initEvent();
    },
    initEvent: function () {
      nx.sets({ $event: nx.mix(null, EventMitt) });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxNodeToolkits;
}

export default NxNodeToolkits;
