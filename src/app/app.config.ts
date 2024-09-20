import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'dabubble-silas',
        appId: '1:145965149921:web:b32bf49eea4cc10840d1a0',
        storageBucket: 'dabubble-silas.appspot.com',
        apiKey: 'AIzaSyAmjaPpEGC7IsNyL_s-dNLHvnAuT9agOkI',
        authDomain: 'dabubble-silas.firebaseapp.com',
        messagingSenderId: '145965149921',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

