import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef
} from "@angular/core";

@Component({
  selector: "lib-ngp-mcq",
  templateUrl: "./ngp-mcq.component.html",
  styleUrls: ["./ngp-mcq.component.css"]
})
export class NgpMcqComponent implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef) {}
  @Input() dataSource: any[] = [];
  selectedAnswerId = -1;
  public slideIndex = 1;
  public displayResultPage = false;
  @Input() timeDurationPerQuestion = 30;
  questionsTimer = 0;
  answerListArray = [];
  ngOnInit() {
    this.showQuestionsSlide(0);
  }

  onAnswerSelection(questionId) {
    this.showUpdatedItem(questionId);
  }

  defaultAnswerSelected() {
    this.dataSource.map(ele => {
      ele["SelectedAnswerId"] = -1;
    });
  }

  AnswerListData() {
    var resultArray: any[] = [];
    resultArray = this.dataSource.map(ele => {
      var correctAns = ele.AnswerId;
      var selectedAns = ele.SelectedAnswerId;
      if (correctAns == selectedAns) {
        return true;
      } else {
        return false;
      }
    });
    var totalQuestions = resultArray.length;
    var totalCorrectAnswersArr = resultArray.map(item => {
      return item === true;
    });
    var totalCorrectAnswers = totalCorrectAnswersArr.length;
  }

  showUpdatedItem(questionId) {
    const updateItem = this.dataSource.find(this.findIndexToUpdate, questionId);
    const index = this.dataSource.indexOf(updateItem);
    this.dataSource[index].SelectedAnswerId = this.selectedAnswerId;
  }

  findIndexToUpdate(ds) {
    return ds.QuestionId === this;
  }

  ngAfterViewInit() {
    this.defaultAnswerSelected();
    setInterval(() => {
      this.nextQuestionsSlidWithTimer(1);
    }, this.timeDurationPerQuestion * 1000);
  }

  showQuestionsSlide(n) {
    const slides = this.elem.nativeElement.querySelectorAll(".mySlides");

    if (slides) {
      if (n > slides.length) {
        this.displayResultPage = true;
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

  currentQuestionsSlide(n) {
    this.showQuestionsSlide((this.slideIndex = n));
  }
}
