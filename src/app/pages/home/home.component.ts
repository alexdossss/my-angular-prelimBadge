import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Conference {
  id: number;
  name: string;
  date: string;
  description: string;
  location: string;
  website: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  conferences: Conference[] = [
    {
      id: 1,
      name: 'Mobile World Congress (MWC) 2026',
      date: 'March 2–5, 2026',
      description: 'Major global mobile industry conference & exhibition',
      location: 'Barcelona, Spain',
      website: 'https://www.mwcbarcelona.com/',
      image: 'https://event-assets.gsma.com/Header-Images/_1200x630_crop_center-center_82_none/MWC_GSMA_IMAGE.png?mtime=1750066905'
    },
    {
      id: 2,
      name: 'Worldwide Developers Conference (WWDC) 2026',
      date: 'June 2026',
      description: 'Apple\'s annual developer conference — software, OS & tools',
      location: 'Cupertino, CA (and virtual)',
      website: 'https://developer.apple.com/wwdc/',
      image: 'https://www.techi.com/wp-content/uploads/2025/03/Apple-announces-WWDC-2025-takes-place-June-9-13.webp'
    },
    {
      id: 3,
      name: 'COMPUTEX Taipei 2026',
      date: 'June 2–5, 2026',
      description: 'One of the world\'s largest computer technology expos',
      location: 'Taipei, Taiwan',
      website: 'https://computextaipei.com.tw/',
      image: 'https://storage.googleapis.com/www.taiwantradeshow.com.tw/activity-photo/202406/T-45214774.jpg'
    },
    {
      id: 4,
      name: '84th World Science Fiction Convention (LAcon V)',
      date: 'August 27–31, 2026',
      description: 'Annual international science fiction convention',
      location: 'Anaheim, California, USA',
      website: 'https://lacon.org/',
      image: 'https://www.lacon.org/wp-content/uploads/2024/07/venue-acc.jpg'
    },
    {
      id: 5,
      name: 'DeveloperWeek 2026',
      date: 'Feb 11–13, 2026 (in person) and Feb 18–20 (virtual)',
      description: 'Global developer conference with workshops, hackathons',
      location: 'San Francisco Bay Area, CA',
      website: 'https://www.developerweek.com/',
      image: 'https://www.developerweek.com/wp-content/uploads/2025/05/DW26_preview.jpg'
    },
    {
      id: 6,
      name: 'AI & Big Data Expo North America 2026',
      date: 'June 3–4, 2026',
      description: 'Conference focused on artificial intelligence and big data tech',
      location: 'Santa Clara, CA',
      website: 'https://www.ai-expo.net/northamerica/',
      image: 'https://www.developer-tech.com/wp-content/uploads/2025/12/600x3005.png'
    }
  ];
}
