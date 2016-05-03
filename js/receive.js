// shitler-web - A HTML5 client for shitlerd
// Copyright (C) 2016 Tulir Asokan

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

function recHandlers() {}

function onMessage(evt) {
  var data = JSON.parse(evt.data)
  if (inGame.length === 0) onPrejoinMessage(data)
  else                     recHandlers[data.type](data)
}

function onPrejoinMessage(data) {
  if (data.success) {
    store.authtoken = data.authtoken
    console.log("Successfully joined game!")
    $("#container").loadTemplate($("#template-lobby"), {game: data.game}, {append: false, isFile: false, async: false})
  } else {
    $("#join-fail").removeClass("hidden")
    switch (data.message) {
    case "gamenotfound":
      $("#join-fail").text(sprintf("Could not find the game %s!", data.game))
		case "gamestarted":
      $("#join-fail").text(sprintf("The game %s has already started.", data.game))
		case "full":
      $("#join-fail").text(sprintf("The game %s is full.", data.game))
		case "nameused":
      $("#join-fail").text(sprintf("The name <i>%s</i> is already in use.", data.game))
		case "invalidname":
      $("#join-fail").text(sprintf("The name <i>%s</i> contains invalid characters.", data.name))
		default:
      $("#join-fail").text(sprintf("Unknown error while joining game: %s", data.message))
    }
  }
}

recHandlers.prototype.join = function(data) {

}

recHandlers.prototype.quit = function(data) {

}

recHandlers.prototype.quit = function(data) {

}

recHandlers.prototype.connected = function(data) {

}

recHandlers.prototype.disconnected = function(data) {

}

recHandlers.prototype.start = function(data) {

}

recHandlers.prototype.president = function(data) {

}

recHandlers.prototype.startvote = function(data) {

}

recHandlers.prototype.vote = function(data) {

}

recHandlers.prototype.cards = function(data) {

}

recHandlers.prototype.presidentdiscard = function(data) {

}

recHandlers.prototype.chancellordiscard = function(data) {

}

recHandlers.prototype.table = function(data) {

}

recHandlers.prototype.enact = function(data) {

}

recHandlers.prototype.forceenact = function(data) {

}

recHandlers.prototype.peek = function(data) {

}

recHandlers.prototype.peekcards = function(data) {

}

recHandlers.prototype.investigateresult = function(data) {

}

recHandlers.prototype.investigate = function(data) {

}

recHandlers.prototype.presidentselect = function(data) {

}

recHandlers.prototype.execute = function(data) {

}

recHandlers.prototype.investigated = function(data) {

}

recHandlers.prototype.presidentselected = function(data) {

}

recHandlers.prototype.executed = function(data) {

}

recHandlers.prototype.end = function(data) {

}

recHandlers.prototype.error = function(data) {

}
