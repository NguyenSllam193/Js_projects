/**
 * Render songs
 * Scroll list song
 * Play / pause / seek
 * CD rotate
 * Next / prev
 * Random song
 * Next / Repeat when end
 * Active song
 * Scroll active song into view
 * Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const playlist = $('.playlist')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const btnPrev = $('.btn-prev')
const btnNext = $('.btn-next')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: './assets/music/Nói Với Em Một Lời Trước Khi Xa Rời.mp3',
            image: 'https://i1.sndcdn.com/artworks-TxSkSt1FkBrnqqQR-8bf0Ig-t500x500.jpg'
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung MTP',
            path: './assets/music/NƠI NÀY CÓ ANH .mp3',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        },
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: './assets/music/Nói Với Em Một Lời Trước Khi Xa Rời.mp3',
            image: 'https://i1.sndcdn.com/artworks-TxSkSt1FkBrnqqQR-8bf0Ig-t500x500.jpg'
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung MTP',
            path: './assets/music/NƠI NÀY CÓ ANH .mp3',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        },
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: './assets/music/Nói Với Em Một Lời Trước Khi Xa Rời.mp3',
            image: 'https://i1.sndcdn.com/artworks-TxSkSt1FkBrnqqQR-8bf0Ig-t500x500.jpg'
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung MTP',
            path: './assets/music/NƠI NÀY CÓ ANH .mp3',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        },
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: './assets/music/Nói Với Em Một Lời Trước Khi Xa Rời.mp3',
            image: 'https://i1.sndcdn.com/artworks-TxSkSt1FkBrnqqQR-8bf0Ig-t500x500.jpg'
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung MTP',
            path: './assets/music/NƠI NÀY CÓ ANH .mp3',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        },
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: './assets/music/Nói Với Em Một Lời Trước Khi Xa Rời.mp3',
            image: 'https://i1.sndcdn.com/artworks-TxSkSt1FkBrnqqQR-8bf0Ig-t500x500.jpg'
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung MTP',
            path: './assets/music/NƠI NÀY CÓ ANH .mp3',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        }
    ],

    render: function(){
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    defineProperty: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvent: function(){
        const _this = this
        const cdWidth = cd.offsetWidth

        // Xử lý phóng to, thu nhỏ đĩa nhạc
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý cd quay khi play song
        const cdThumbAnimate = cdThumb.animate([
            {   transform: "rotate(360deg)" }
        ], 
        {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý khi click nút Play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        }

        // Khi play song
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add("playing")
            cdThumbAnimate.play()
        }

        // Khi pause song
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove("playing")
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        //  Xử lý tua bài  hát
        progress.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value 
            audio.currentTime = seekTime
        }

        // Khi next bài hát
        btnNext.onclick = function(){
            if(_this.playRandomSong){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
        }

        // Khi prev bài hát
        btnPrev.onclick = function(){
            if(_this.playRandomSong){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
        }

        // Chức năng random bài hát
        btnRandom.onclick = function(){
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active', _this.isRandom)
        }

        // Chức năng repate bài hát
        btnRepeat.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active', _this.isRepeat)
        }

        // Xử lý khi bài hát kết thúc
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                btnNext.click()
            }
        }
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex <= 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)
        
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function(){
        // Định nghĩa các thuộc tính cho object
        this.defineProperty()

        // Lắng nghe và xử lý các sự kiện (DOM EVENTS)
        this.handleEvent()

        // Tải thông tin đầu tiên khi ứng dụng được khởi chạy
        this.loadCurrentSong()

        // Render playlist
        this.render()
    }
}

app.start()