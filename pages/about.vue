<template>
  <div>
    <h2>about page</h2>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const url = 'http://localhost:3000/api/test';
    const data = await fetch(
      url,
    // ).then(r => r.text())
    ).then(r => r.json())
    console.log('data', data);

    return {
      name: data.name
    }
  },
  data() {
    return {
      name: null
    }
  }
}
</script>


