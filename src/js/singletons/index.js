import _ from 'lodash';

class Singleton {
  constructor() {
    console.log('initialize singleton');
    this.system = {
      pagination: {
        marginPages: 1,
        pageRange: 5
      }
    };
  }

  getSystemInfo() {
    return _.cloneDeep(this.system);
  }

  setSystemInfo(system) {
    this.system = system;
  }
  
}

export default new Singleton();
