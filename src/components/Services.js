import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';


export class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:'Free Cocktails',
                info:'Reprehenderit laboris tempor et elit non. Nulla deserunt Lorem magna fugiat veniam culpa occaecat'
            },
            {
                icon:<FaHiking />,
                title:'Endless Hiking',
                info:'Reprehenderit laboris tempor et elit non. Nulla deserunt Lorem magna fugiat veniam culpa occaecat'
            }, {
                icon:<FaShuttleVan />,
                title:'Free Shuttle',
                info:'Reprehenderit laboris tempor et elit non. Nulla deserunt Lorem magna fugiat veniam culpa occaecat'
            },
            {
                icon:<FaBeer />,
                title:'Strongest Beer',
                info:'Reprehenderit laboris tempor et elit non. Nulla deserunt Lorem magna fugiat veniam culpa occaecat'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services
