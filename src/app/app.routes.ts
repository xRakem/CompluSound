import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SoundsComponent } from './pages/sounds/sounds.component';
import { GlobalMapComponent } from './pages/map/global-map/global-map.component';
import { UcmMapComponent } from './pages/map/ucm-map/ucm-map.component';
import { ForumComponent } from './pages/forum/forum.component';
import { AddSoundComponent } from './pages/add-sound/add-sound.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'sounds', component: SoundsComponent  },
    { path: 'map', 
        children: [
            { path: 'global-map', component: GlobalMapComponent},
            { path: 'ucm-map', component: UcmMapComponent}
        ]    
    },
    { path: 'forum', component: ForumComponent  },
    { path: 'add-sound', component: AddSoundComponent  },
    { path: 'contact-us', component: ContactUsComponent  },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
