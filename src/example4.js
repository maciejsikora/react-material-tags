import React from 'react';
import Tags from './tags';
import NoteAdd from 'material-ui/svg-icons/action/note-add';

class Example4 extends React.Component{

  render(){

    const sourceTags=[
      {label:"Batman"},
      {label:"Superman"},
      {label:"Wolverine"},
      {label:"SubZero"},
      {label:"Scorpion"},
      {label:"DeadShot"},
      {label:"DeadPool"},
      {label:"Hulk"},
      {label:"Captain America"},
      {label:"Spider Man"},
      {label:"Joker"},
      {label:"Nicolas Cage"},
      {label:"Ant Man"},
      {label:"Iron Man"}
    ];


    return (

        <Tags onlyFromSource={true} button={{child: <NoteAdd />}} sourceTags={sourceTags} />
    )

  }


};

export default Example4;
