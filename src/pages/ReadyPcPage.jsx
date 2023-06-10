import React from 'react';
import classes from '../styles/readypc.module.css';
import { Computer } from '../components/Computer/Computer';

const PC = [
    {head: "'Экономная'", proc: 'INTEL CORЕ I3-10100F' ,videocard: 'GTX 1060 6GB', ram: 'RAM 8GB', memory: 'HD 500GB | SSD 120GB'},
    {head: "'SUPER'", proc: 'INTEL CORE I5-12400F' ,videocard: 'RTX 3060 12GB', ram: 'RAM 32GB', memory: 'M.2 1TB'},
    {head: "'Комфорт'", proc: 'RYZEN 5 5500' ,videocard: 'NVIDIA RTX 3060 12GB', ram: 'RAM 32GB', memory: 'SSD 960GB'},
    {head: "'ULTRA'", proc: 'INTEL CORE I7-11700KF' ,videocard: 'RTX3070TI 8GB', ram: 'RAM 32 GB', memory: 'M.2 1 TB | HDD 120 GB'},
    {head: "'4К'", proc: 'INTEL CORE I7-10700F' ,videocard: 'RTX 3060 12G', ram: 'RAM 32GB', memory: 'M.2 1TB'}
]

export const ReadyPcPage = () => {
    return (
        <main className={classes.container}>
            <Computer 
                photo='/Computer_assembly_App/imgs/computer1.png' head={PC[0].head} price='22000 грн' 
                proc={PC[0].proc} videocard={PC[0].videocard} ram={PC[0].ram} memory={PC[0].memory}
            />
            <Computer 
                photo='/Computer_assembly_App/imgs/computer2.png' head={PC[1].head} price='45000 грн' 
                proc={PC[1].proc} videocard={PC[1].videocard} ram={PC[1].ram} memory={PC[1].memory}
            />
            <Computer 
                photo='/Computer_assembly_App/imgs/computer3.png' head={PC[2].head} price='39500 грн' 
                proc={PC[2].proc} videocard={PC[2].videocard} ram={PC[2].ram} memory={PC[2].memory}
            />
            <Computer 
                photo='/Computer_assembly_App/imgs/computer4.png' head={PC[3].head} price='72000 грн' 
                proc={PC[3].proc} videocard={PC[3].videocard} ram={PC[3].ram} memory={PC[3].memory}
            />
            <Computer 
                photo='/Computer_assembly_App/imgs/computer5.png' head={PC[4].head} price='53500 грн' 
                proc={PC[4].proc} videocard={PC[4].videocard} ram={PC[4].ram} memory={PC[4].memory}
            />
        </main>
    )
}