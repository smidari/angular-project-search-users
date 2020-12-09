export enum WebStorages {
  LocalStorage = 'localStorage',
}

class WebStorageLocalStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  get(key: string) {
    return localStorage.getItem(key);
  }
}

const webStorageFactory = (type: WebStorages) => {
  switch (type) {
    default:
      return new WebStorageLocalStorage();
  }
};

export function WebStorage(storage: WebStorages) {
  const storageInstance = webStorageFactory(storage);
  return (target: object, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get(): any {
        return storageInstance.get(propertyKey);
      },
      set(v: any): void {
        storageInstance.set(propertyKey, v);
      },
    });
  };
}
