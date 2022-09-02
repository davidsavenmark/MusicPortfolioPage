import { IconType } from 'react-icons'
import{GiGuitar} from 'react-icons/gi'
import{RiComputerFill} from 'react-icons/ri'
import {CgPiano} from 'react-icons/cg'
import {GiGuitarBassHead} from 'react-icons/gi'
import { IService, IVideos } from './type'
import { YouTubePlayer } from 'react-youtube'


export const services: IService[] = [

    {
        title:"Beats/Drums",
        about:"I produce beats/arrange drums inside my DAW",
        Icon: RiComputerFill,
    },
    {
        title: "Bass",
        about:"I play electric bass to both my music and to other songs",
        Icon: RiComputerFill,
    },
    {
        title: "Piano",
        about:"My go-to instrument when it comes to arranging harmonies, chord-progressions etc.",
        Icon: CgPiano,
    },
    {
        title: "Guitar",
        about:"I also play both electric and acoustic guitar",
        Icon: GiGuitar,
    },
]

export const videos: IVideos[] = [
    {
        title:'Analogy',
        about:'First song from the EP Patterns',
        video: YouTubePlayer('IotBQAzTMCc'),

    },
]

