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

var store = window.localStorage
var socket = null
var websocketPath = 'wss://' + window.location.host + '/socket'
if (window.location.protocol !== "https:") {
  websocketPath = 'ws://' + window.location.host + '/socket'
}
var connected = false
var inGame = ""

function sendMessage(payload) {
  if(payload === undefined || payload === null || payload.length === 0) {
    return false
  }

  var content = JSON.stringify(payload)

  if (content.length > 1024) {
    return false
  }

  socket.send(content)
  return true
}