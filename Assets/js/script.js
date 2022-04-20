$("#currentDay").text(moment().format("dddd MMMM Do" + ", " + "YYYY"));

let container = $(".container");
let time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let currentHour = moment().hour() - 9;

window.onload = init();

$(".saveBtn").on("click", save);

function init() {
  for (let i = 0; i < time.length; i++) {
    if (i < currentHour) {
      var timeClass = "past";
    } else if (i === currentHour) {
      var timeClass = "present";
    } else if (i > currentHour) {
      var timeClass = "future";
    }
    var row = $("<div>").attr("class", "row");
    container.append(row);

    var timeLabel = $("<label>").attr(
      "class",
      "time-block hour col-2 col-sm-1"
    );
    timeLabel.text(time[i]);
    row.append(timeLabel);

    var timeText = $("<textarea>").attr(
      "class",
      "col-8 col-sm-10 description " + timeClass
    );
    timeText.text(localStorage.getItem("btn" + i));
    row.append(timeText);

    var btn = $("<button>").attr(
      "class",
      "saveBtn fas fa-save col-2 col-sm-1 saveBtn i:hover"
    );
    btn.attr("id", "btn" + i);
    row.append(btn);
  }
}

function save() {
  localStorage.setItem($(this).attr("id"), $(this).prev().val());
}
