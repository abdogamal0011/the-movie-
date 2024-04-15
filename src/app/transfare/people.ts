export interface People {

    adult: boolean
    id: string
    name: string
    original_name: string
    media_type: string
    popularity: number
    gender: number
    known_for_department: string
    profile_path: string
    known_for: Array<{
      adult: boolean
      backdrop_path: string
      id: number
      title: string
      original_language: string
      original_title: string
      overview: string
      poster_path: string
      media_type: string
      genre_ids: Array<number>
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }>


}
