<!-- eslint-disable no-undef -->
<script setup>
import headerVue from './components/header.vue'
import footbarVue from './components/footbar.vue'
import { EventsOn } from '../wailsjs/runtime'

const logArr = $ref([])
const heapArr = $ref([])
const fileArr = $ref([])
const registryArr = $ref([])

// eslint-disable-next-line camelcase
function timeConverter (UNIX_timestamp) {
  const a = new Date(UNIX_timestamp)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const hour = a.getHours()
  const min = a.getMinutes()
  const sec = a.getSeconds()
  const millisec = a.getMilliseconds()
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec + '.' + millisec
  return time
}

let beginTime = 0
let foldersInOneSec = 0
let pathArr = []
function detectThreat (messageJson) {
  if ('path' in messageJson) {
    const pathWithoutFile = messageJson.path.substr(0, messageJson.path.lastIndexOf('\\'))

    if (beginTime === 0 || messageJson.time - beginTime >= 1000) {
      beginTime = messageJson.time
      pathArr = []
      pathArr.push(pathWithoutFile)
      foldersInOneSec = 1
    } else if (pathArr.includes(pathWithoutFile) === false) {
      pathArr.push(pathWithoutFile)
      foldersInOneSec++
    }

    if (foldersInOneSec >= 9) {
      messageJson.Warning = 'TooManyFoldersGotModified'
    }
  }
}

function transUDPMsg (message) {
  const messageJson = JSON.parse(message)
  detectThreat(messageJson)
  messageJson.time = timeConverter(parseInt(messageJson.time))
  // eslint-disable-next-line eqeqeq
  if (messageJson.result == 1) { messageJson.result = 'SUCCESS' } else { messageJson.result = 'FAILED' }

  if (messageJson.Operation.includes('Heap')) {
    messageJson.index = heapArr.length
    heapArr.push(messageJson)
    logArr.push(messageJson)
  } else if (messageJson.Operation.includes('File') || messageJson.Operation === 'CloseHandle') {
    messageJson.index = fileArr.length
    fileArr.push(messageJson)
    logArr.push(messageJson)
  } else if (messageJson.Operation.includes('Reg')) {
    messageJson.index = registryArr.length
    registryArr.push(messageJson)
    logArr.push(messageJson)
  }

  messageJson.attributes = []
  Object.entries(messageJson).forEach(([key, value]) => {
    if (key !== 'attributes') { messageJson.attributes.push(key) }
  })
}

EventsOn('receiveUDPMessage', transUDPMsg)

</script>

<template>
  <div class="App">
    <nav>
      <headerVue class="header"/>
    </nav>
    <div class="main">
      <router-view :logArr="logArr" :heapArr="heapArr" :fileArr="fileArr" :registryArr="registryArr"></router-view>
    </div>
    <footer>
      <footbarVue class="footbar" />
    </footer>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}

#shield {
  height: 20rem;
}

.footbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
