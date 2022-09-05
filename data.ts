import{GiGuitar} from 'react-icons/gi'
import{RiComputerFill} from 'react-icons/ri'
import {CgPiano} from 'react-icons/cg'
import {GiGuitarBassHead} from 'react-icons/gi'
import { IService} from './type'


export const services: IService[] = [

    {
        title:"Beats/Drums",
        about:"I produce beats/arrange drums inside my DAW.",
        Icon: RiComputerFill,
    },
    {
        title:"Bass",
        about:"I play electric bass to both my music and to other songs.",
        Icon: GiGuitarBassHead,
    },
    {
        title:"Piano",
        about:"My go-to instrument when it comes to arranging harmonies, chord-progressions etc.",
        Icon: CgPiano,
    },
    {
        title:"Guitar",
        about:"I play electric and acoustic guitar.",
        Icon: GiGuitar,
    },
]


