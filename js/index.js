const Progress = {
    data() {
        return {
            progress: 0,
            now: Date.now(),
            loadingTime: 300000
        }
    },
    mounted() {
        setInterval(() => {
            let current = Date.now()
            if (this.progress < 99) {
                let progress = Math.ceil(Math.ceil(((current - this.now) / this.loadingTime) * 1000000) / 1000)
                this.progress = progress > 100 ? 99 : progress
                console.log(this.progress)
            }
        }, 1000)
        setTimeout(() => {
            this.progress = 100
        }, 600000);
    }
}

Vue.createApp(Progress).mount('#progress');
