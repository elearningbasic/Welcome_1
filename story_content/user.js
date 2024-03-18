function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CUvqKHTew3":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let allVideosInCourse = document.getElementsByTagName("video"); 
for (let i = 0; i < allVideosInCourse.length; i++) {
  allVideosInCourse[i].setAttribute("controls", "true");
}
}

};
