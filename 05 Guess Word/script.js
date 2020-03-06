var type1 = [
    {
        que: "What is always coming, but never arrives?",
        ans: "TOMORROW",
        asked: false
    },
    {
        que: "What can be broken, but is never held?",
        ans: "PROMISE",
        asked: false
    },
    {
        que: "What is it that lives if it is fed, and dies if you give it a drink?",
        ans: "FIRE",
        asked: false
    },
    {
        que: "What is it that if you have, you want to share me, and if you share, you do not have?",
        ans: "SECRET",
        asked: false
    },
    {
        que: "What has a head, a tail, but does not have a body?",
        ans: "COIN",
        asked: false
    },
    {
        que: "What word starts with IS, ends with AND, and has LA in the middle?",
        ans: "ISLAND",
        asked: false
    },
    {
        que: "What is it that stands up, but grows down?",
        ans: "CANDLE",
        asked: false
    },
    {
        que: "What do you find in the middle of nowhere?",
        ans: "H",
        asked: false
    },
    {
        que: "How many zeros are there in a two-thousand rupee note?",
        ans: "THREE",
        asked: false
    },
    {
        que: "Which is the longest river in the world?",
        ans: "NILE",
        asked: false
    },
    {
        que: "Which is the biggest continent in the world?",
        ans: "ASIA",
        asked: false
    },
    {
        que: "Which planet is closest to the sun?",
        ans: "MERCURY",
        asked: false
    },
    {
        que: "What do you call a shape which has three sides?",
        ans: "TRIANGLE",
        asked: false
    },
    {
        que: "How many fingers are there in a human body’s single hand?",
        ans: "FIVE",
        asked: false
    },
    {
        que: "Which is the smallest planet in our solar system?",
        ans: "MERCURY",
        asked: false
    },
    {
        que: "How many colors are there in a rainbow?",
        ans: "SEVEN",
        asked: false
    },
    {
        que: "What is a baby frog called?",
        ans: "TADPOLE",
        asked: false
    },
    {
        que: "What do you call the person who brings a letter to your home from post office?",
        ans: "POSTMAN",
        asked: false
    },
    {
        que: "Which animal is known as the ‘Ship of the Desert?",
        ans: "CAMEL",
        asked: false
    },
    {
        que: "What makes up (approx.) 80% of our brain’s volume?",
        ans: "WATER",
        asked: false
    },
    {
        que: "Which country does volleyball originate from?",
        ans: "USA",
        asked: false
    },
    {
        que: "What is Zumba?",
        ans: "DANCE",
        asked: false
    },
    {
        que: "The unit of current is",
        ans: "AMPERE",
        asked: false
    },
    {
        que: "Which is the first country to print book?",
        ans: "CHINA",
        asked: false
    },
    {
        que: "Which was the first country to send man to the moon?",
        ans: "USA",
        asked: false
    },
    {
        que: "Which was the first country on which the atom bomb was dropped?",
        ans: "JAPAN",
        asked: false
    },
    {
        que: "What do you call a house made of ice?",
        ans: "IGLOO",
        asked: false
    },
    {
        que: "Which country is called the land of rising sun?",
        ans: "JAPAN",
        asked: false
    },
    {
        que: "Mount Everest Lies in",
        ans: "NEPAL",
        asked: false
    },
]
var score = 0
$('.score').html("Score : " + score)
remain_question = []
//push the index to list 
type1.forEach((val, i) => { remain_question.push(i) })

//choose question
function chooseQue() {
    len = remain_question.length
    index = Math.floor(Math.random() * len)
    que_i = remain_question[index]
    remain_question.splice(index, 1)
    return que_i
}
// adding answer into array
function ansArrAdd(ans) {
    arr = []
    answer = []
    for (let i = 0; i < 12; i++) {
        if (arr.length >= ans.length) {
            code = Math.floor(Math.random() * (90 - 65)) + 65;
            arr.push(String.fromCharCode(code))
        }
        else {
            arr.push(ans[i])
        }
    }
    return arr
}

//shuffle's array
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

//display question and answer with box
function displayQA(que, arr, ans) {
    $("#question").html(que)
    $("#options").empty()
    $("#answer").empty()
    $("#options").append("<div id='opt_upper'></div>")
    $("#options").append("<div id='opt_lower'></div>")

    //for option; for upper 6 btn
    for (let i = 0; i < 6; i++) {
        $("#opt_upper").append(`<button class='opt_btn' id="${i}"  onclick='displayAns(this.id,arr)'>${arr[i]}</button>`)

    }
    //for option; for lower 6 btn
    for (let i = 6; i < 12; i++) {
        $("#opt_lower").append(`<button class='opt_btn' id="${i}"  onclick="displayAns(this.id,arr)">${arr[i]}</button>`)

    }
    //for answer field ; initally as _
    for (let i = 0; i < ans.length; i++) {
        $("#answer").append(`<button class='ans_btn' id='ans_btn_id_${i}' >_</button>`)
    }
}
//on click displays ; is called from btn on click by class .ans_btn
// checks for the correct answer also
function displayAns(id, arr) {
    ans_btn = $(".ans_btn")
    count = 0
    for (let i = 0; i < ans_btn.length; i++) {
        if (ans_btn[i].innerHTML == "_") {
            count = i
            $("#ans_btn_id_" + count).html(arr[id])
            $("#" + id).attr("disabled", true)
            if (count == ans_btn.length - 1) {
                checkAnswer(ans_btn)
            }
            break
        }
    }

}
function checkAnswer(ans_btn) {
    check = false
    f_ans = []
    for (let i = 0; i < ans_btn.length; i++) {
        f_ans.push(ans_btn[i].innerHTML)
    }
    c_ans = f_ans.join("")
    if (c_ans == type1[que_index].ans) {
        check = true
    }
    messageDisplay(check)

}
function messageDisplay(check) {
    if (check) {
        document.getElementById("right_play").play()
        score += 100
        $('.score').html("Score : " + score)
        $('#nxt_btn').show()
        $('#clr_btn').hide()
    }
    else {
        document.getElementById("wrong_play").play()
    }
}
//clears the answer field and activates the option btn from disables
function clearBtn() {
    ans_btn = $(".ans_btn")
    opt_btn = $(".opt_btn")
    for (let i = 0; i < ans_btn.length; i++) {
        $("#ans_btn_id_" + i).html("_")
    }
    for (let i = 0; i < opt_btn.length; i++) {
        $("#" + i).attr("disabled", false)
    }
}
function nextBtn() {
    $('#nxt_btn').hide()
    $('#clr_btn').show()
    main()
}

//main function ; run self initally
var que_index
function main() {
    que_index = chooseQue()
    var que = type1[que_index].que
    var ansA = type1[que_index].ans.split("")
    var ans_12 = ansArrAdd(type1[que_index].ans)
    var sff_ans = shuffle(ans_12)
    displayQA(que, sff_ans, ansA)
}
main()