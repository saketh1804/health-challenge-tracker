import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
  imports: [FormsModule]
})
export class AddWorkoutComponent {
  workout = { name: '', type: '', minutes: null };
  message: string = '';
  success: boolean = false;

  constructor(private workoutService: WorkoutService, private ngZone: NgZone) {}

  addWorkout() {
    if (this.workout.name && this.workout.type && this.workout.minutes) {
      this.workoutService.addWorkout({
        name: this.workout.name,
        type: this.workout.type,
        minutes: this.workout.minutes
      });

      this.message = `Workout added for ${this.workout.name}: ${this.workout.type} (${this.workout.minutes} mins)`;
      this.success = true;

      this.workout = { name: '', type: '', minutes: null };

      this.ngZone.run(() => {
        setTimeout(() => {
          this.message = '';
        }, 3000);
      });
    } else {
      alert('Please fill in all fields');
    }
  }
}
