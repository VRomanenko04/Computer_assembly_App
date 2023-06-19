import React, { useState } from 'react';
import classes from '../styles/readypc.module.css';
import { Computer } from '../components/Computer/Computer';
import { readyPc } from '../data/readypc';

const PC = readyPc;

export const ReadyPcPage = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const sortedPC = PC.slice().sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <main className={classes.main}>
            <div className={classes.select_container}>
                <select className={classes.select} value={sortOrder} onChange={handleSortChange}>
                    <option value="asc">По возрастанию цены</option>
                    <option value="desc">По убыванию цены</option>
                </select>
            </div>
            <section className={classes.container}>
                {sortedPC.map((computer, index) => (
                    <Computer 
                        key={index}
                        photo={computer.photo}
                        head={computer.head}
                        price={computer.price + ' грн'}
                        proc={computer.proc}
                        videocard={computer.videocard}
                        ram={computer.ram}
                        memory={computer.memory}
                    />
                ))}
            </section>
        </main>
    )
}