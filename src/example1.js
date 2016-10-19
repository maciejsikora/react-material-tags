import React from 'react';
import Tags from './tags';

class Example1 extends React.Component{

  render(){

    const sourceTags=[
      {label:"America"},
      {label:"Europe"},
      {label:"Africa"},
      {label:"Asia"},
      {label:"Australia"}
    ];

    const defTags=[
      {label:"America"}
    ];

    return (

        <Tags defTags={defTags} sourceTags={sourceTags} />
    )

  }


};

export default Example1;
