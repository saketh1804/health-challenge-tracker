import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts = [
    { name: 'John Doe', workout: { type: 'Running', duration: 30 } },
    { name: 'Jane Smith', workout: { type: 'Cycling', duration: 45 } },
    { name: 'Mike Johnson', workout: { type: 'Yoga', duration: 50 } }
  ];

  // Add a new workout to the list
  addWorkout(workout: any) {
    // Ensure the passed object is structured correctly
    const newWorkout = { name: workout.name, workout: { type: workout.type, duration: workout.minutes } };
    this.workouts.push(newWorkout);  // Add the workout to the in-memory array
    
    // Save to localStorage
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  // Get all workouts from localStorage or use default if not available
  getWorkouts() {
    const workoutsData = localStorage.getItem('workouts');
    if (workoutsData) {
      return JSON.parse(workoutsData);  // Parse and return stored workouts from localStorage
    }
    
    return this.workouts;  // Return default workouts if no data found in localStorage
  }

  // Delete a workout from the list
  deleteWorkout(index: number) {
    this.workouts.splice(index, 1);
    
    // Save updated workouts to localStorage
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
}
