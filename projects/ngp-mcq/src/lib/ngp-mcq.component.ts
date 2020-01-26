import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "ngp-mcq",
  templateUrl: "./ngp-mcq.component.html",
  styleUrls: ["./ngp-mcq.component.css"]
})
export class NgpMcqComponent implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef) {}
  @Input() dataSource: any[] = [];
  tempdataSource: any[] = [];
  @Input() timeDurationPerQuestion = 30;
  @Input() startText = 'Press Start to Start the Test';
  @Input() allowReset = false;
  @Output() resultantDataSource: EventEmitter<any> = new EventEmitter();
  @Output() getCurrentQuestionDetails: EventEmitter<any> = new EventEmitter();

  selectedAnswerId = -1;
  questionsTimer = 0;
  public slideIndex = 1;
  public displayResultPage = false;
  public totalQuestions = 0;
  public totalCorrectAnswers = 0;
  IsStartButtonVisible = true;
  answerListArray = [];
  resultPercentage = '0';
  count = 0;
  ngOnInit() {}

  onAnswerSelection(questionId) {
    this.showUpdatedItem(questionId);
  }

  startSlideShow(e) {
    this.IsStartButtonVisible = false;
    this.nextQuestionsSlidWithTimerVal(0);
    let mainSlideTimer = setInterval(() => {
      this.nextQuestionsSlidWithTimer(1);
    }, this.timeDurationPerQuestion * 1000);
  }

  defaultAnswerSelected() {
    this.dataSource.map(ele => {
      ele['SelectedAnswerId'] = this.selectedAnswerId;
    });
  }

  AnswerListData() {
    let resultArray: any[] = [];
    resultArray = this.dataSource.map(ele => {
      const correctAns = ele.ValidAnswerId;
      const selectedAns = ele.SelectedAnswerId;
      if (correctAns === selectedAns) {
        return { result: true };
      } else {
        return { result: false };
      }
    });
    this.totalQuestions = resultArray.length;
    let totalCorrectAnswersCount = 0;
    resultArray.forEach(e => {
      if (e.result) {
        totalCorrectAnswersCount++;
      }
    });
    this.totalCorrectAnswers = totalCorrectAnswersCount;
    const num = (this.totalCorrectAnswers / this.totalQuestions) * 100;
    this.resultPercentage = num.toFixed(2);
  }

  showUpdatedItem(questionId) {
    const updateItem = this.dataSource.find(this.findIndexToUpdate, questionId);
    const index = this.dataSource.indexOf(updateItem);
    this.dataSource[index].SelectedAnswerId = this.selectedAnswerId;
    this.getCurrentQuestionDetails.emit(this.dataSource[index]);
  }

  findIndexToUpdate(ds) {
    return ds.QuestionId === this;
  }

  ngAfterViewInit() {
    this.tempdataSource = this.dataSource;
    this.defaultAnswerSelected();
  }

  resetQuestions() {
    this.displayResultPage = false;
    this.dataSource = this.tempdataSource;
  }

  showQuestionsSlide(n) {
    const slides = this.elem.nativeElement.querySelectorAll('.myQuestionnaire');

    if (slides) {
      if (n > slides.length) {
        if (this.count === 0) {
          this.displayResultPage = true;
          this.resultantDataSource.emit(this.dataSource);
          this.AnswerListData();
          this.selectedAnswerId = -1;
          this.count++;
        }
      }

      slides.forEach((ele: HTMLElement) => {
        ele.style.display = 'none';
      });

      if (this.slideIndex <= slides.length) {
        slides[this.slideIndex - 1].style.display = 'block';
      }
    }
    this.selectedAnswerId = -1;
  }

  nextQuestionsSlide(n) {
    this.showQuestionsSlide((this.slideIndex += n));
  }

  nextQuestionsSlidWithTimer(n) {
    let counter = this.timeDurationPerQuestion;
    let slideInterval = setInterval(() => {
      this.questionsTimer = counter;
      counter--;
      if (counter < 0) {
        clearInterval(slideInterval);
        this.showQuestionsSlide((this.slideIndex += n));
      }
    }, 1000);
  }

  nextQuestionsSlidWithTimerVal(n) {
    this.showQuestionsSlide((this.slideIndex += n));
    n++;
    let counter = this.timeDurationPerQuestion;
    let tempSlideInterval = setInterval(() => {
      this.questionsTimer = counter;
      counter--;
      if (counter < 0) {
        clearInterval(tempSlideInterval);
        this.showQuestionsSlide((this.slideIndex += n));
      }
    }, 1000);
  }

  currentQuestionsSlide(n) {
    this.showQuestionsSlide((this.slideIndex = n));
  }
}
