var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var Button_Click_1_position, Button_Click_2_position, Button_Click_3_position, Button_Click_4_position;
[Button_Click_1_position, Button_Click_2_position, Button_Click_3_position, Button_Click_4_position] = [0, 0, 0, 0];

function Button_Click_1() {
    if (Button_Click_1_position == 1) {
        document.getElementById("features-visual-own-image").style.opacity = "0";
        document.getElementById("features-visual-decor-1").style.opacity = "0";
        document.getElementById("feature-add").style.opacity = "0";
        document.getElementById("add-collaborators").style.opacity = "0";
        document.getElementById("features-visual-decor-2").style.opacity = "0";
        document.getElementById("edit-canvas").style.opacity = "0";
      document.getElementById("features-visual-decor-3").style.opacity = "0";
        Button_Click_1_position = 0;
        Button_Click_2_position = 0;
        Button_Click_3_position = 0;
        Button_Click_4_position = 0;
        return
    }
    document.getElementById("features-visual-own-image").style.opacity = "1";
    Button_Click_1_position = 1;
}

function Button_Click_2() {
    if (Button_Click_2_position == 1) {
        document.getElementById("add-collaborators").style.opacity = "0";
        document.getElementById("features-visual-decor-2").style.opacity = "0";
        document.getElementById("edit-canvas").style.opacity = "0";
        document.getElementById("features-visual-decor-3").style.opacity = "0";
        document.getElementById("features-visual-decor-1").style.opacity = "0";
        document.getElementById("feature-add").style.opacity = "0";
        Button_Click_2_position = 0;
        Button_Click_3_position = 0;
        Button_Click_4_position = 0;
        return
    }
    document.getElementById("features-visual-decor-1").style.opacity = "1";
    document.getElementById("feature-add").style.opacity = "1";
    document.getElementById("features-visual-own-image").style.opacity = "1";
    Button_Click_2_position = 1;
    Button_Click_1_position = 1;
}

function Button_Click_3() {
    if (Button_Click_3_position == 1) {
        document.getElementById("features-visual-decor-2").style.opacity = "0";
        document.getElementById("add-collaborators").style.opacity = "0";
        document.getElementById("features-visual-decor-3").style.opacity = "0";
        document.getElementById("edit-canvas").style.opacity = "0";
        Button_Click_4_position = 0;
        Button_Click_3_position = 0;
        return
    }
    document.getElementById("add-collaborators").style.opacity = "1";
    document.getElementById("features-visual-decor-2").style.opacity = "1";
    document.getElementById("features-visual-decor-1").style.opacity = "1";
    document.getElementById("feature-add").style.opacity = "1";
    document.getElementById("features-visual-own-image").style.opacity = "1";
    Button_Click_2_position = 1;
    Button_Click_1_position = 1;
    Button_Click_3_position = 1;
}

function Button_Click_4() {
    if (Button_Click_4_position == 1) {
        document.getElementById("features-visual-decor-3").style.opacity = "0";
        document.getElementById("edit-canvas").style.opacity = "0";
        Button_Click_4_position = 0;
        return
    }
    document.getElementById("edit-canvas").style.opacity = "1";
    document.getElementById("features-visual-decor-3").style.opacity = "1";
    document.getElementById("add-collaborators").style.opacity = "1";
    document.getElementById("features-visual-decor-2").style.opacity = "1";
    document.getElementById("features-visual-decor-1").style.opacity = "1";
    document.getElementById("feature-add").style.opacity = "1";
    document.getElementById("features-visual-own-image").style.opacity = "1";
    Button_Click_2_position = 1;
    Button_Click_1_position = 1;
    Button_Click_3_position = 1;
    Button_Click_4_position = 1;
}