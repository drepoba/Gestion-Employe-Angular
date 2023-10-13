import { CanActivateFn } from '@angular/router';
import { ɵɵinject } from '@angular/core';
import { StorageService } from './services/storage.service';

export const homeGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(StorageService)


  // Check if the user is logged in using the AuthService
  if (authService.isLoggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
