<template>
  <div>
    <h2>about page</h2>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const url = 'http://localhost:3000/api'
    const data = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    // ).then(r => r.text())
    ).then(r => r.json()).then(r => JSON.parse(r))
    console.log('data', typeof data)
    console.log('userId', data && data.userId)
    return {
      name: data.userId
    }
  },
  data() {
    return {
      name: null
    }
  }
}
</script>


