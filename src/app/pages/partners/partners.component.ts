import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  id: number;
  name: string;
  logo: string;
  logoUrl: string;
  isPremium: boolean;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners: Partner[] = [
    { id: 1, name: 'Microsoft', logo: '💻', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png', isPremium: true },
    { id: 2, name: 'Google', logo: '🔍', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png', isPremium: true },
    { id: 3, name: 'Amazon Web Services', logo: '☁️', logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws.png', isPremium: false },
    { id: 4, name: 'IBM', logo: '📊', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png', isPremium: true },
    { id: 5, name: 'Cisco Systems', logo: '🌐', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png', isPremium: false },
    { id: 6, name: 'Salesforce', logo: '📈', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1024px-Salesforce.com_logo.svg.png', isPremium: false }
  ];
}
