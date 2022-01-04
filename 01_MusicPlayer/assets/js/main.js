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

const playlist = $('.playlist')

const app = {
    songs: [
        {
            name: 'Nói Với Em Một Lời Trước Khi Xa Rời Remix',
            singer: 'Không Bằng (NA)',
            path: 'https://soundcloud.com/ho-ng-ng-ph-ng-236057515/n-i-v-i-em-m-t-l-i-tr-c-khi-xa',
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
            path: 'https://soundcloud.com/ho-ng-ng-ph-ng-236057515/n-i-v-i-em-m-t-l-i-tr-c-khi-xa',
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
            path: 'https://soundcloud.com/ho-ng-ng-ph-ng-236057515/n-i-v-i-em-m-t-l-i-tr-c-khi-xa',
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
            path: 'https://soundcloud.com/ho-ng-ng-ph-ng-236057515/n-i-v-i-em-m-t-l-i-tr-c-khi-xa',
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
            path: 'https://soundcloud.com/ho-ng-ng-ph-ng-236057515/n-i-v-i-em-m-t-l-i-tr-c-khi-xa',
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

    handleEvent: function(){
        const cd = $('.cd')
        const cdWidth = cd.offsetWidth

        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            console.log(newCdWidth)
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }
    },

    start: function(){
        this.handleEvent()

        this.render()
    }
}

app.start()