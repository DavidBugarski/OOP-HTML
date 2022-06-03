<script type="text/javascript">

var loginName = "";
var userid = _spPageContextInfo.userId;
GetCurrentUser();

function GetCurrentUser() {
var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";

var requestHeaders = { "accept" : "application/json;odata=verbose" };

$.ajax({
  url : requestUri,
  contentType : "application/json;odata=verbose",
  headers : requestHeaders,
  success : onSuccess,
  error : onError
  });
}

function onSuccess(data, request) {
    var loginName = data.d.Title;
    alert("Hello " + loginName);

    // to set the "hello username" into the page
    document.getElementById("id").innerHTML = "Hello " + loginName;
    }

function onError(error) {
  alert(error);
  }

</script>
<div id="current_date"></p>
<script>
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;
</script>
<script>
            var dt = new Date();
            document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
</script>