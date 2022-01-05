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


const app = {
    currentIndex: 0,

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
            path: 'https://soundcloud.com/minh-anh-31/son-tung-mtp-noi-nay-co-anh-ma-mix-1',
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
            path: 'https://soundcloud.com/minh-anh-31/son-tung-mtp-noi-nay-co-anh-ma-mix-1',
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
            path: 'https://soundcloud.com/minh-anh-31/son-tung-mtp-noi-nay-co-anh-ma-mix-1',
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
            path: 'https://soundcloud.com/minh-anh-31/son-tung-mtp-noi-nay-co-anh-ma-mix-1',
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
            path: 'https://soundcloud.com/minh-anh-31/son-tung-mtp-noi-nay-co-anh-ma-mix-1',
            image: 'https://i1.sndcdn.com/artworks-000253796816-4rm2so-t500x500.jpg'
        }
    ],

    render: function(){
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
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
        }

        // Khi pause song
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove("playing")
        }
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    start: function(){
        // Định nghĩa các thuộc tính cho object
        this.defineProperty()

        // Lắng nghe và xử lý các sự kiện (DOM EVENTS)
        this.handleEvent()

        //  Tải thông tin đầu tiên khi ứng dụng được khởi chạy
        this.loadCurrentSong()

        // Render playlist
        this.render()
    }
}

app.start()