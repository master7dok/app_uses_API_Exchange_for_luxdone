const App = {
    data() {
        return {
            exchange: [],
            name: ''
        }
    },
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'Adding'
            }
            const res = await fetch('/api/exchange', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newExchange = await res.json()
            this.exchange.push(newExchange)
        },
        async remove(id) {
            await fetch(`/api/exchange/${id}`, {method: 'DELETE'})
            this.exchange = this.exchange.filter(ex => ex.id !== id)
        }
    },
    async mounted() {
        const res = await fetch('/api/exchange')
        this.exchange = await res.json()
    }

}
Vue.createApp(App).mount('#app')