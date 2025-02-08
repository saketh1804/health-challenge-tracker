import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutDataService {
  private workoutData = new BehaviorSubject<number[]>([0, 0, 0]);  // Initial dummy data
  currentWorkoutData = this.workoutData.asObservable();

  // Method to update the workout data
  updateWorkoutData(newData: number[]) {
    this.workoutData.next(newData);
  }
}
