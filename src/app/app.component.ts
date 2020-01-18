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
      QuestionId: 12,
      Question: '1 Who is current Prime Minister of India',
      AnswerList: [{
        AnswerId: 12,
        Answer: 'Manmohan Singh'
      },
      {
        AnswerId: 13,
        Answer: 'Sonia Gandhi'
      },
      {
        AnswerId: 14,
        Answer: 'Narendra Modi'
      },
      {
        AnswerId: 15,
        Answer: 'Rahul Gandhi'
      }],
      AnswerId : 14
    },
    {
      QuestionId: 22,
      Question: '2 Who is current Prime Minister of India',
      AnswerList: [{
        AnswerId: 12,
        Answer: 'Manmohan Singh'
      },
      {
        AnswerId: 13,
        Answer: 'Sonia Gandhi'
      },
      {
        AnswerId: 14,
        Answer: 'Narendra Modi'
      },
      {
        AnswerId: 15,
        Answer: 'Rahul Gandhi'
      }],
      AnswerId : 14
    },
    {
      QuestionId: 15,
      Question: '3 Who is current Prime Minister of India',
      AnswerList: [{
        AnswerId: 12,
        Answer: 'Manmohan Singh'
      },
      {
        AnswerId: 13,
        Answer: 'Sonia Gandhi'
      },
      {
        AnswerId: 14,
        Answer: 'Narendra Modi'
      },
      {
        AnswerId: 15,
        Answer: 'Rahul Gandhi'
      }],
      AnswerId : 14
    },
    {
      QuestionId: 54,
      Question: '4 Who is Worst Prime Minister of India',
      AnswerList: [{
        AnswerId: 12,
        Answer: 'Manmohan Singh'
      },
      {
        AnswerId: 13,
        Answer: 'Sonia Gandhi'
      },
      {
        AnswerId: 14,
        Answer: 'Narendra Modi'
      },
      {
        AnswerId: 15,
        Answer: 'Rahul Gandhi'
      }],
      AnswerId : 12
    },
  ];
}
