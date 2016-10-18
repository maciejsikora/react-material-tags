import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';

/**
tags special component
**/
class Tags extends Component{

  constructor(props){

    super(props);

    this.state={
      tags:props.tags,
      value:"",
      errorText:null
    }

    //set error text value
    this.errorText=(this.props.textField && this.props.textField.errorText)?this.props.textField.errorText:"Value is required";

  }

  componentWillReceiveProps(props){

    this.setState({tags:this.props.tags});

  }

  handleRequestDelete(tagData,key){

    let tags=this.state.tags;
    tags.splice(key,1);

    this.setState({tags:tags});

  }


  getContainerStyle(){

    return this.props.containerStyle;
  }

  getContainerClassName(){

    return this.props.containerClassName;
  }

  renderTag(data,key){

    let {...otherChip} = this.props.chip;

    return (<Chip
        {...otherChip}
        key={key}
        onRequestDelete={() => this.handleRequestDelete(data, key)}
      >
        {data.label}
    </Chip>)

  }

  handleKeyPress(e){

    if (e.charCode===13){//enter

        this.add(e.target.value);

      }
  }

  add(value){

    if (value.trim().length===0)//empty
    {
      //set error info
      this.showInputError();
      return;
    }

    let tags=this.state.tags;
    tags.unshift({label:value});

    this.setState({tags:tags,value:""}); //set new tags and clean value

    if (this.props.onAdd!==null)
    this.props.onAdd(this.state.tags[this.state.tags.length-1],this.state.tags);//we send to callback current tags
  }

  showInputError(){
    this.setState({errorText:this.errorText});
  }

  hideInputError(){

    this.setState({errorText:null});
  }

  handlTextValueChange(e){

    this.setState({value:e.target.value});

    if (this.state.errorText!==null && e.target.value.trim().length>0)
    this.hideInputError();

    if ( typeof this.props.textField.onChange === "function"){

      //run callback is what set
      this.props.textField.onChange(e);

    }

  }


  //on button click
  buttonClickHandler(){

    this.add(this.state.value);

  }

  render(){

    let tags=this.props.tags.map((tag,index)=>{

        return this.renderTag(tag,index);

    });



    let button=null;
    //add button
    if (this.props.button!==null){


      const {child,...otherButtonProps}=this.props.button;

      let childEl=child?child:null;//something inside button

      button=(
        <IconButton {...otherButtonProps} onClick={this.buttonClickHandler.bind(this)}   >
        {childEl}
        </IconButton>
      );

    }

    //textField props
    const {...otherTF} = this.props.textField;


    return (

      <div>
      <div>
        <TextField {...otherTF} value={this.state.value} errorText={this.state.errorText} onChange={this.handlTextValueChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
        {button}
      </div>
      <div style={this.getContainerStyle()} className={this.getContainerClassName()} >
        {tags}
      </div>
      </div>

    );

  }

}

//props definitions
Tags.propTypes = {
  tags: React.PropTypes.array,
  textField:React.PropTypes.object,
  chip:React.PropTypes.object,
  containerClassName:   React.PropTypes.string,
  containerStyle: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onAdd: React.PropTypes.func,
  button: React.PropTypes.object

};

//default values
Tags.defaultProps = {
  tags: [],
  containerClassName:"tags-container",
  containerStyle:{
    display:"flex",
    flexDirection: "row" ,
    flexWrap: "wrap"
  },
  textField:null,
  chip:null,
  onRemove:null,
  onAdd:null
};

export default Tags;
