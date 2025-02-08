import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { WorkoutProgressComponent } from './workout-progress/workout-progress.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component'; // Adjust paths based on your folder structure
import { WorkoutListComponent } from './workout-list/workout-list.component';

export const appRoutes: Routes = [
{path: 'workout-progress', component: WorkoutProgressComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: '', redirectTo: '/workout-list', pathMatch: 'full' },
];
