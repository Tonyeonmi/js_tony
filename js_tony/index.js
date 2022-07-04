window.onload = function(){
    document.getElementById("add-button").addEventListener("click", addNum);
    document.getElementById("schedule").setAttribute("onkeyup","enterkey()")
}

function addNum() {
    let num = document.getElementById("schedule").value;
    const now = new Date();

    function getToday(){
        let date = new Date();
        let yyyy = date.getFullYear();
        let mm = date.getMonth()+1;
        let dd = date.getDate();

        if (mm < 10)
            mm = "0" + mm;
        if (dd < 10)
            dd = "0" + dd;
            
        return yyyy + "." + mm + "." +dd;
        console.log(moment(). format('yyyy년 mm 월 dd 일'));
    }

    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click",function(){
        
        if (!confirm("진짜 삭제하게? 진심이야? 트루?")) {
            checkbox.checked = false;
        } else {
            checkbox.parentNode.parentNode.remove();
        }
    });

    let table = document.getElementsByClassName("table__table");

    let tr = document.createElement("tr");
    let tdDate = document.createElement("td");
    let tdContent = document.createElement("td");
    let tdComplete = document.createElement("td");

    tdDate.innerText = getToday();
    tdContent.innerText = num;
    tdComplete.appendChild(checkbox);

    tr.appendChild(tdDate);
    tr.appendChild(tdContent);
    tr.appendChild(tdComplete);

    table[0].appendChild(tr);

    document.getElementById("schedule").value = "";

}

function enterkey() {
	if (window.event.keyCode == 13) {
    	addNum()
    }
}