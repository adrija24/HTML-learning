function myfunc()
{
    let username = document.querySelector("#fname");
    let userage = document.querySelector("#age");

    localStorage.setItem("name", username.value);
    localStorage.setItem("age", userage.value);
    window.location.href = "wish.html";
}
