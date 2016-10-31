import React from 'react';
import Tags from './tags';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class Example3 extends React.Component{

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
      {label:"Spain"},
      {label:"Italy"}
    ];

    return (

        <Tags defTags={defTags} button={{child: <ActionGrade />}} sourceTags={sourceTags} />
    )

  }


};

export default Example3;
