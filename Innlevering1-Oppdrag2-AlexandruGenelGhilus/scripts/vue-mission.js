Vue.component('mission', {
    template: `

<div class="mission">
    <h1>Empty h1</h1>
    <p> {{ title }} </p>
</div>

    `
    ,
    data() {
      return {
          title: func.title,
      }
    },
    methods: {
    }
  })