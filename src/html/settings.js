/*
Created by Freshek on 31.10.2017
*/

function saveOptions(e) {
  e.preventDefault();
  var elements = {
    headerColor:        $("#headerColor").val(),
    headerOpacity:      $("#headerOpacity").val(),
    windowColor:        $("#windowColor").val(),
    windowOpacity:      $("#windowOpacity").val(),
    timerTick:          $("#timerTick").val(),
    enableRefresh:      $("#enableRefresh").prop('checked'),
    refreshToReconnect: $("#refreshToReconnect").prop('checked'),
    refreshTime:        $("#refreshTime").val(),
    speedFormat:        $('input[name="speedFormat"]:checked').val(),
    windowsToTabs:      $("#windowsToTabs").prop('checked'),
    abilitySlot:       $("#abilitySlot").val(),
    collectBoxWhenCircle: $("#collectBoxWhenCircle").prop('checked'),
    workmap: $("#workmap").val(),
  };

  chrome.storage.local.set(elements);
}

function restore() {
	$('[data-resource]').each(function() {
		  var el = $(this);
		  var resourceName = el.data('resource');
		  var resourceText = chrome.i18n.getMessage(resourceName);
		  el.text(resourceText);
		});
	
  var items = ["headerColor", "headerOpacity", "windowColor", "windowOpacity", "timerTick", "windowsToTabs",
                "enableRefresh", "refreshToReconnect", "refreshTime", 
                "speedFormat"];

  var onGet = items => {

    if (items.headerColor)
      $("#headerColor").val(items.headerColor);
    if (items.headerOpacity)
      $("#headerOpacity").val(items.headerOpacity);
    if (items.windowColor)
      $("#windowColor").val(items.windowColor);
    if (items.windowOpacity)
      $("#windowOpacity").val(items.windowOpacity);
    if (items.timerTick)
      $("#timerTick").val(items.timerTick);
    if (items.enableRefresh)
      $("#enableRefresh").prop('checked', true);
    if(items.refreshToReconnect)
      $("#refreshToReconnect").prop('checked', true);
    if (items.refreshTime)
      $("#refreshTime").val(items.refreshTime);

    if (items.speedFormat) {
      let sel = `#speedFormat_${items.speedFormat}`;
      $(sel).prop('checked', true);
    }
    
    if (items.windowsToTabs) {
      $("#windowsToTabs").prop('checked', true);
    }
    if (items.workmap) {
      $("#workmap").val(items.workmap);
    }
  };

  chrome.storage.local.get(items, onGet);
}

$('.clearSettings').on("click", chrome.storage.sync.clear());
$("form").on("submit", saveOptions);
$(document).ready(restore);