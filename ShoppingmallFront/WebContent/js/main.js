 // 드롭다운 메뉴를 보여주거나 숨기는 함수
 function toggleDropdown() {
    var dropdowns = document.getElementsByClassName("sub-menu");
    for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns[i];
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }
}

// 클릭 이벤트를 추가하여 드롭다운 메뉴 토글
var dropdownToggle = document.getElementsByClassName("dropbtn");
for (var i = 0; i < dropdownToggle.length; i++) {
    dropdownToggle[i].addEventListener("click", toggleDropdown);
}