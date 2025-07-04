import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';

export const isLoggedinGuard: CanActivateFn = (route, state) => {
  return true;
};
