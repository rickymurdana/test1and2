const textarea = document.getElementById("textarea1");

function changeFontSize(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function bold(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");
    }
}

function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function underline(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

function cut(e) {
    navigator.clipboard
        .writeText(textarea.value)
        .then(() => {
            alert("text copied");
            textarea.value = "";
        })
}

function copy(e) {
    navigator.clipboard
        .writeText(textarea.value)
        .then(() => alert("text copied"))
}

function paste(e) {
    navigator.clipboard
        .readText()
        .then( text => textarea.value = text)
}

function alignLeft(e) {
    textarea.style.textAlign = "left";
}

function alignCenter(e) {
    textarea.style.textAlign = "center";
}

function alignRight(e) {
    textarea.style.textAlign = "right";
}

function unorderedList(e) {
    let text = document.getElementById('textarea1').value;
    let listNumberRegex = /^[0-9]+(?=\.)/gm;
    let existingNums = [];
    let num;
    
    while ((num = listNumberRegex.exec(text)) !== null) {
        existingNums.push(num);
    }

    existingNums.sort();
    let addListItemNum;
    if (existingNums.length > 0) {
        addListItemNum = parseInt(existingNums[existingNums.length - 1], 10) + 1;
    } else {
        addListItemNum = 1;
    } 

    let exp = '\n' + addListItemNum + '.\xa0';
    text = text.concat(exp);
    document.getElementById('textarea1').value = text;
}

function orderedList(e) {
    let text = document.getElementById('textarea1').value;
    let exp = '\n' + '-';
    text = text.concat(exp);
    document.getElementById('textarea1').value = text;
}

function changeCase(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}

function reset() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function changeColor(e) {
    let value = e.value;
    textarea.style.color = value;
}

window.addEventListener('load', () => {
    textarea.value = "";
});