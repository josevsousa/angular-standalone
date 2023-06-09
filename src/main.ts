import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            provideFirebaseApp( ()=> initializeApp(environment.firebase) ),
            provideFirestore( ()=> getFirestore() ) 
        )
    ]
}
);