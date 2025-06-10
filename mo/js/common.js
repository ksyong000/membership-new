$(document).ready(function () {
  //�レ옄 �곷Ц留� �낅젰
  $(".onlyEngNum").on("input", function (e) {
    this.value = this.value.replace(/[^0-9A-Za-z\s]/g, "");
  });
  //�レ옄留�
  $(".onlyNum").on("input", function (e) {
    this.value = this.value.replace(/[^0-9\s]/g, "");
  });
});

function isNotEmpty(_str) {
  var obj = String(_str);
  if (
    obj == null ||
    obj == undefined ||
    obj == "null" ||
    obj == "undefined" ||
    obj == ""
  )
    return false;
  else return true;
}

function isEmpty(_str) {
  return !isNotEmpty(_str);
}
