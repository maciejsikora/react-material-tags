import React from 'react';
import Tags from './tags';

class Example2 extends React.Component{

  render(){

    const sourceTags=[
      {label:"Great Britain"},
      {label:"Poland"},
      {label:"Germany"},
      {label:"Austria"},
      {label:"France"},
      {label:"Hungary"},
      {label:"Holland"},
      {label:"Finland"},
      {label:"Lonely Shepherd"},
      {label:"Slovakia"},
      {label:"Russia"},
      {label:"Portugal"},
      {label:"Spain"},
      {label:"Italy"}



    ];

    const defTags=[
    ];

    return (

        <Tags defTags={defTags} button={{className:"red-button"}} sourceTags={sourceTags} />
    )

  }


};

export default Example2;
