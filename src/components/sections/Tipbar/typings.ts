export interface ITipbar {
    tipbar: ITipbarIcon[]
}
  
export interface ITipbarIcon {
    icon: IImage
}
  
export interface IImage {
    image: string
    alt?: string
}