function ClickAugment() {
    var clickbtn = document.getElementById("increment");
    var value = clickbtn.innerHTML;
    value++;
    document.getElementById("increment").innerHTML = value;
}

export default ClickAugment