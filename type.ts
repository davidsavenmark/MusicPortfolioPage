import { IconType } from "react-icons";
import YouTube, { YouTubeProps } from "react-youtube";

export interface IService{
    title:string,
    about:string,
    Icon: IconType,
}
export interface IVideos{
    title:string,
    about:string,
    video:YouTubeProps,
}