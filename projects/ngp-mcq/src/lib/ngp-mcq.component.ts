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
  resultPercentage = "0";
  ngOnInit() {}

  onAnswerSelection(questionId) {
    this.showUpdatedItem(questionId);
  }

  startSlideShow(e) {
    this.IsStartButtonVisible = false;
    this.nextQuestionsSlidWithTimerVal(0);
    setInterval(() => {
      this.nextQuestionsSlidWithTimer(1);
    }, this.timeDurationPerQuestion * 1000);
  }

  defaultAnswerSelected() {
    this.dataSource.map(ele => {
      ele["SelectedAnswerId"] = this.selectedAnswerId;
    });
  }

  AnswerListData() {
    var resultArray: any[] = [];
    resultArray = this.dataSource.map(ele => {
      var correctAns = ele.ValidAnswerId;
      var selectedAns = ele.SelectedAnswerId;
      if (correctAns == selectedAns) {
        return { result: true };
      } else {
        return { result: false };
      }
    });
    this.totalQuestions = resultArray.length;
    var totalCorrectAnswersCount = 0;
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
    this.defaultAnswerSelected();
  }

  showQuestionsSlide(n) {
    const slides = this.elem.nativeElement.querySelectorAll(".myQuestionnaire");

    if (slides) {
      if (n > slides.length) {
        this.displayResultPage = true;
        this.resultantDataSource.emit(this.dataSource);
        this.AnswerListData();
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      slides.forEach((ele: HTMLElement) => {
        ele.style.display = "none";
      });

      if (this.slideIndex !== 0) {
        slides[this.slideIndex - 1].style.display = "block";
      }
    }
    this.selectedAnswerId = -1;
  }

  nextQuestionsSlide(n) {
    this.showQuestionsSlide((this.slideIndex += n));
  }

  nextQuestionsSlidWithTimer(n) {
    let counter = this.timeDurationPerQuestion;
    const intervals = setInterval(() => {
      this.questionsTimer = counter;
      counter--;
      if (counter < 0) {
        clearInterval(intervals);
        this.showQuestionsSlide((this.slideIndex += n));
      }
    }, 1000);
  }

  nextQuestionsSlidWithTimerVal(n) {
    this.showQuestionsSlide((this.slideIndex += n));
    let counter = this.timeDurationPerQuestion;
    const intervals = setInterval(() => {
      this.questionsTimer = counter;
      counter--;
      if (counter < 0) {
        clearInterval(intervals);
        this.showQuestionsSlide((this.slideIndex += n));
      }
    }, 1000);
  }

  currentQuestionsSlide(n) {
    this.showQuestionsSlide((this.slideIndex = n));
  }
}
