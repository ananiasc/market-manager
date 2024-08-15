import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RenderService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  isServerSide(): boolean {
    return isPlatformServer(this.platformId);
  }

  isClientSide(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
