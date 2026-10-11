import { Component } from '@angular/core';
import {
  IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent,
  IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton,
  IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle,
  IonToolbar,
} from '@ionic/angular';

type Gender = 'Male' | 'Female';

interface Student {
  id: number;
  img: string;
  name: string;
  gender: Gender;
  course: string;
  year: number;
}

const YEAR_LABELS: Record<number, string> = {
  1: '1st Year',
  2: '2nd Year',
  3: '3rd Year',
  4: '4th Year',
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent,
    IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton,
    IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonText, IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  readonly section = 'BSIT 3D';

  readonly students: Student[] = [
    { id: 1, img: './assets/picture/juan.jpg', name: 'Juan Dela Cruz', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 2, img: './assets/picture/maria.jpg', name: 'Maria Santos', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 3, img: './assets/picture/carlos.jpg', name: 'Carlos Reyes', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 4, img: './assets/picture/angela.jpg', name: 'Angela Garcia', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 5, img: './assets/picture/mark.jpg', name: 'Mark Villanueva', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 6, img: './assets/picture/sofia.jpg', name: 'Sofia Mendoza', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 7, img: './assets/picture/daniel.jpg', name: 'Daniel Bautista', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 8, img: './assets/picture/beatrice.jpg', name: 'Beatrice Navarro', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 9, img: './assets/picture/junil.jpg', name: 'Jhun Neilicious', gender: 'Male', course: 'BS Information Technology', year: 3 },
    { id: 10, img: './assets/picture/vanessa.jpg', name: 'Vanessa Shine Bello', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 11, img: './assets/picture/janella.jpg', name: 'Janella Mae Mae Caingcoy', gender: 'Female', course: 'BS Information Technology', year: 3 },
    { id: 12, img: './assets/picture/jefraine.jpg', name: 'Jefriane Garcia Dark Superior', gender: 'Male', course: 'BS Information Technology', year: 3 },
  ];

  searchQuery = '';
  activeSegment = 'all';
  selectedStudent: Student | null = null;
  showStats = false;

  get filteredStudents(): Student[] {
    const query = this.searchQuery.toLowerCase();
    return this.students.filter(student =>
      student.name.toLowerCase().includes(query) &&
      (this.activeSegment === 'all' || student.gender.toLowerCase() === this.activeSegment)
    );
  }

  get totalStudents(): number {
    return this.students.length;
  }

  get totalMale(): number {
    return this.countByGender('Male');
  }

  get totalFemale(): number {
    return this.countByGender('Female');
  }

  get hasActiveFilters(): boolean {
    return this.searchQuery !== '' || this.activeSegment !== 'all';
  }

  onSearchChange(event: CustomEvent): void {
    this.searchQuery = event.detail.value ?? '';
  }

  onSegmentChange(event: CustomEvent): void {
    this.activeSegment = event.detail.value;
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
  }

  closeDetail(): void {
    this.selectedStudent = null;
  }

  toggleStats(): void {
    this.showStats = !this.showStats;
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.activeSegment = 'all';
  }

  getGenderColor(gender: Gender): string {
    return gender === 'Male' ? 'primary' : 'tertiary';
  }

  getYearLabel(year: number): string {
    return YEAR_LABELS[year] ?? `Year ${year}`;
  }

  private countByGender(gender: Gender): number {
    return this.students.filter(student => student.gender === gender).length;
  }
}
