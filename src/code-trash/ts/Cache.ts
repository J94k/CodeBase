export default class Cache {
  private storage: Map<any, any>;

  constructor() {
    this.storage = new Map();
  }

  set(key: any, value: any): void {
    this.storage.set(key, value);
  }

  get(key: any): any {
    return this.storage.get(key);
  }

  has(key: any): boolean {
    return this.storage.has(key);
  }
}
