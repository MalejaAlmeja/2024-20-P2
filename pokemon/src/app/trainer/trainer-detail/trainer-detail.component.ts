import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  trainerId!: number;

  constructor(private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  getTrainerById() {
    this.trainerService.getTrainerById(this.trainerId).subscribe((data) => {
    this.trainerDetail = data;
    })
  }

  ngOnInit() {
    if (this.trainerDetail == undefined) {
      this.trainerId = this.route.snapshot.paramMap.get('id')! as unknown as number;
      if(this.trainerId){
        this.getTrainerById();
      }
    }
  }
}
