import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  imports: [FormsModule, NgFor]
})
export class WorkoutListComponent implements OnInit {
  users: any[] = []; 
  searchText = ''; 
  selectedType = ''; 
  currentPage = 1;
  itemsPerPage = 5;
  filteredData: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.workoutService.getWorkouts();
    this.updateFilteredData();
  }

  updateFilteredData() {
    const filteredUsers = this.users
      .filter(user => user.name.toLowerCase().includes(this.searchText.toLowerCase()))
      .filter(user => (this.selectedType ? user.workout.type === this.selectedType : true));

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.filteredData = filteredUsers.slice(startIndex, endIndex);
  }

  deleteUser(name: string, type: string) {
    const globalIndex = this.users.findIndex(user => user.name === name && user.workout.type === type);
    
    if (globalIndex !== -1) {
      this.workoutService.deleteWorkout(globalIndex);
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredData();
    }
  }

  filterByType() {
    this.currentPage = 1;
    this.updateFilteredData();
  }

  filterByName() {
    this.updateFilteredData();
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage) || 1;
  }

  setPage(page: number) {
    this.currentPage = page;
    this.updateFilteredData();
  }
}
