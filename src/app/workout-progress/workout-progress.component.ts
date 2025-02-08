import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { WorkoutService } from '../workout.service';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-workout-progress',
  standalone: true,
  imports: [FormsModule, NgChartsModule, NgFor],
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css'],
})
export class WorkoutProgressComponent implements OnInit {
  users: any[] = [];
  selectedUser: string = '';
  allWorkoutData: any[] = [];
  workoutTypes = ['Running', 'Cycling', 'Yoga', 'Swimming'];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartData<'bar'> = {
    labels: this.workoutTypes,
    datasets: [
      {
        data: [0, 0, 0, 0],
        label: 'Workout Progress',
        backgroundColor: '#42A5F5',
      },
    ],
  };

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.allWorkoutData = this.workoutService.getWorkouts();
    this.users = [...new Set(this.allWorkoutData.map(workout => workout.name))];
    this.updateChartData(this.allWorkoutData);
  }

  filterWorkouts(): void {
    if (!this.selectedUser) {
      this.updateChartData(this.allWorkoutData);
    } else {
      const filteredWorkouts = this.allWorkoutData.filter(workout => workout.name === this.selectedUser);
      this.updateChartData(filteredWorkouts);
    }
  }

  private updateChartData(data: any[]): void {
    let workoutDurations: Record<string, number> = {
      Running: 0,
      Cycling: 0,
      Yoga: 0,
      Swimming: 0,
    };
    data.forEach(({ workout }) => {
      if (workoutDurations.hasOwnProperty(workout.type)) {
        workoutDurations[workout.type] += workout.duration;
      }
    });
    this.barChartData = {
      ...this.barChartData,
      datasets: [
        {
          ...this.barChartData.datasets[0],
          data: this.workoutTypes.map(type => workoutDurations[type]),
        },
      ],
    };
  }
}
