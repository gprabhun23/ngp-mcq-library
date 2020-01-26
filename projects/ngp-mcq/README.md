# ngp-mcq

** Version 1.1.0 **

ngp-mcq is a multiple choice questionnaire generator service that helps you to create multiple choice questions for use in online test or other purposes.

All you need to do is construct an array of questionnaire details and pass it as datasource for this library.

:point_right: * Easy to use

:point_right: * We are allowing option to pass time limit for each questions (in seconds).

:point_right: * Get results with user selected answers.

:point_right: * The test creation system is very intuitive.

:point_right: * This component will create a dynamic MCQ.

:point_right: * Beautiful UI and mobile friendly

##Installation and Usage

:point_right: **Step 1:** Install the plugin. 

```
npm i ngp-mcq
```

:point_right: **Step 2:** Import the plugin into any of your module.

```javascript
import { NgpMcqModule } from 'ngp-mcq';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpMcqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

:point_right: **Step 3:** Import *ngp-mcq* in to you template page.

```javascript

  <ngp-mcq [dataSource]="dataSourceList"
  [timeDurationPerQuestion]="30"
  [allowReset]="true"
  (resultantDataSource)="getResult($event)"
  (getCurrentQuestionDetails)="getCurrentQuestionDetails($event)">
  </ngp-mcq>
 
 ```
:point_right: **Step 4:** Pass the `dataSource`

Construct the datasource for below interface structure (Questionnaire array) and pass it to the datasource input property.

```javascript
  export interface AnswerList {
      AnswerId: number;
      AnswerText: string;
  }

  export interface QuestionsList {
      QuestionId: number;
      Questiontext: string;
      AnswerList: AnswerList[];
      ValidAnswerId: number;
  }
```

:point_right: **Step 5:** Other properties
------------- 

:point_right: **timeDurationPerQuestion** Allow to specify the seconds for each questions.

:point_right: **allowReset** Allow reset button on results page.

:point_right: **startText** Allow to specify starting text.

:point_right: **resultantDataSource** Get resultant array along with SelectedAnswerId property on QuestionsList.

:point_right: **getCurrentQuestionDetails** Get currently displaying question details.

## Contributors

- Ganesh Prabhu N <ganeshprabhu133@gmail.com>

##License and copyright

© Ganesh Prabhu N, Software Developer

Licensed under the [MIT License] (LICENSE)
