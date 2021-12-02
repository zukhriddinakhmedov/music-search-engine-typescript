interface Music {
    album: {
        cover_medium: string;
        id: number;
        title: string
        tracklist: string
        type: string
    }
    artist: {
        link: string
        name: string
        id: number
        picture_small: string
    }
    title_short: string
    id: number
    link: string
    preview: string
    md5_image: string
}

export default Music