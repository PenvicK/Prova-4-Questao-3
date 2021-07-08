import React from  'react';
import { Component } from "react";
import api from "../api";

class Home extends Component{
    state = {
        wiki_doctor_who: [],
    }

    async componentDidMount(){
        const response = await api.get('');
        this.setState({wiki_doctor_who: response.data});
    }
    render(){
        const { wiki_doctor_who } = this.state;
        return(
            <div>
                <h1>
                Wiki Doctor Who:
                </h1>
                <p>
                    {console.log(wiki_doctor_who)}
                    {wiki_doctor_who.map(doctor_who => (                   
                        <li key = {doctor_who.show.id}> 
                            {doctor_who.show.name}
                            <p>
                                <div>
                                    Duração: {doctor_who.show.runtime} mins
                                </div>
                                <div>
                                    Gênero: {doctor_who.show.genres.map (generos => (
                                        <span> {generos} </span>
                                    ))}
                                </div>
                                <div> 
                                    Estreiou: {doctor_who.show.premiered}
                                </div>
                                <div>
                                    N° de Episódios: {doctor_who.show.averageRuntime} 
                                </div>
                                <img src={doctor_who.show.image}/>
                            </p>
                        </li>
                    ))}
                </p>
            </div>
        );
    };
}
export default Home;   