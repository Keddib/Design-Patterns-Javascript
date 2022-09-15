const Subject = {
  _state: 0,
  _obseervers: [],
  subscribe(observer) {
    this._obseervers.push(observer);
  },
  unsubscribe(observer) {
    [...this._obseervers].forEach((obs, index) => {
      if (observer == obs) {
        this._obseervers.slice(index, 1);
      }
    })
  },
  getState() { return this._state; },
  setState(data) { this._state = data; this.notify(); },
  notify() {
    function signalObserver(observer) {
      observer.signal(this);
    }
    this._obseervers.forEach(signalObserver.bind(this));
  }
};


let Logger = {
  signal: function (subject) {
    let currentValue = subject.getState();
    console.log('current state', currentValue);
  }
}


Subject.subscribe(Logger);

export default Subject;
