<!-- eslint-disable no-undef -->
<script setup>
import headerVue from './components/header.vue'
import footbarVue from './components/footbar.vue'
import { EventsOn } from '../wailsjs/runtime/runtime'

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

EventsOn('receiveUDPMessage', (message) => {
  const messageJson = JSON.parse(message)
  console.log(messageJson["result"]);

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
  console.log(messageJson.attributes)
})

</script>

<template>
  <headerVue />
  <div class="main">
  <router-view :logArr="logArr" :heapArr="heapArr" :fileArr="fileArr" :registryArr="registryArr"></router-view>
    <div class="footbar">
      <footbarVue />
    </div>
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

/* .footbar {
  position: relative;
  border: solid;
  margin-top: -10rem;
} */
</style>
