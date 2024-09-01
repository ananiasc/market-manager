import { Injectable } from '@angular/core';
import { RenderService } from '../render/render.service';

export class LocalStorage implements Storage {
  [name: string]: unknown;

  readonly length: number = 0;

  clear(): void {
    return undefined;
  }

  getItem(key: string): string | null {
    return undefined!;
  }

  key(index: number): string | null {
    return undefined!;
  }

  removeItem(key: string): void {
    return undefined!;
  }

  setItem(key: string, value: string): void {
    return undefined!;
  }
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  constructor(private renderService: RenderService) {
    this.storage = new LocalStorage();

    if (this.renderService.isClientSide()) {
      this.storage = localStorage;
    }
  }

  [name: string]: unknown;

  length = 0;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): any {
    const storageData = this.storage.getItem(key);

    if (storageData) {
      return JSON.parse(storageData);
    }

    return null;
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: unknown): void {
    return this.storage.setItem(key, JSON.stringify(value));
  }
}
