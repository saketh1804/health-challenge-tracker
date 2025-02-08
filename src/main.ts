import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './app/add-workout/add-workout.component';
import { WorkoutListComponent } from './app/workout-list/workout-list.component';
import { WorkoutProgressComponent } from './app/workout-progress/workout-progress.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: AddWorkoutComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'workout-progress', component: WorkoutProgressComponent } // New route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    NgChartsModule,
  ]
})
  .catch((err) => console.error(err));
