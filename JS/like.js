var likeBotao = document.querySelector(".botaoLike");
var likeCount = document.querySelector(".likeCount");
var like=0;

likeCount.textContent=like;

likeBotao.addEventListener("click", function(event) {

    event.preventDefault();

    like++;
    likeCount.textContent = like;
});

var likeBotao2 = document.querySelector(".botaoLike2");
var likeCount2 = document.querySelector(".likeCount2");
var like2=0;

likeCount2.textContent=like2;

likeBotao2.addEventListener("click", function(event) {

    event.preventDefault();

    like2++;
    likeCount2.textContent = like2;
});