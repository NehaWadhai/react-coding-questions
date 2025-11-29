class EventEmitter {
    constructor() {
      this.events = {}; // stores eventName -> [listeners]
    }
  
    on(event, handler) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(handler);
    }
  
    emit(event, ...args) {
      if (!this.events[event]) return;
  
      this.events[event].forEach(handler => handler(...args));
    }
  
    off(event, handler) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(h => h !== handler);
    }
  }
  