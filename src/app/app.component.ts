import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngp-mcq-demo';

  dataSourceList = [
    {
      QuestionId: 1,
      Questiontext: 'Grand Central Terminal, Park Avenue, New York is the Worlds',
      AnswerList: [{
        AnswerId: 1,
        AnswerText: 'highest railway station'
      },
      {
        AnswerId: 2,
        AnswerText: 'longest railway station'
      },
      {
        AnswerId: 3,
        AnswerText: 'largest railway station'
      },
      {
        AnswerId: 4,
        AnswerText: 'None of the above'
      }],
      ValidAnswerId : 3
    },
    {
      QuestionId: 2,
      Questiontext: 'Ecology deals with',
      AnswerList: [{
        AnswerId: 5,
        AnswerText: 'Cell formation'
      },
      {
        AnswerId: 6,
        AnswerText: 'Birds'
      },
      {
        AnswerId: 7,
        AnswerText: 'Relation between organisms and their environment'
      },
      {
        AnswerId: 8,
        AnswerText: 'Tissues'
      }],
      ValidAnswerId : 7
    },
    {
      QuestionId: 3,
      Questiontext: 'Filaria is caused by',
      AnswerList: [{
        AnswerId: 9,
        AnswerText: 'Protozoa'
      },
      {
        AnswerId: 10,
        AnswerText: 'Mosquito'
      },
      {
        AnswerId: 11,
        AnswerText: 'Virus'
      },
      {
        AnswerId: 12,
        AnswerText: 'Bacteria'
      }],
      ValidAnswerId : 10
    },
    {
      QuestionId: 4,
      Questiontext: 'Friction can be reduced by changing from',
      AnswerList: [{
        AnswerId: 13,
        AnswerText: 'rolling to sliding'
      },
      {
        AnswerId: 14,
        AnswerText: 'sliding to rolling'
      },
      {
        AnswerId: 15,
        AnswerText: 'dynamic to static'
      },
      {
        AnswerId: 16,
        AnswerText: 'potential energy to kinetic energy'
      }],
      ValidAnswerId : 14
    },
    {
      QuestionId: 5,
      Questiontext: 'Velocity of wind is measured by',
      AnswerList: [{
        AnswerId: 17,
        AnswerText: 'speedometer'
      },
      {
        AnswerId: 18,
        AnswerText: 'tachometer'
      },
      {
        AnswerId: 19,
        AnswerText: 'anemometer'
      },
      {
        AnswerId: 20,
        AnswerText: 'audiometer'
      }],
      ValidAnswerId : 19
    },
    {
      QuestionId: 6,
      Questiontext: 'Which of the following UN agencies has its headquarters at Paris?',
      AnswerList: [{
        AnswerId: 21,
        AnswerText: 'UNESCO'
      },
      {
        AnswerId: 22,
        AnswerText: 'ILO'
      },
      {
        AnswerId: 23,
        AnswerText: 'FAO'
      },
      {
        AnswerId: 24,
        AnswerText: 'IMO'
      }],
      ValidAnswerId : 21
    }
  ];

  getResult(data){
    console.log('resultant array',data);
  }

  getCurrentQuestionDetails(data){
    console.log('getCurrentQuestionDetails', data);
  }
}
