# react-material-tags
React component for tipical form control - tags. Has TextField with AutoComplete and tag list.

Examples and more informations - https://maciejsikora.github.io/react-material-tags/

### Installation

```
npm install react-material-tags --save
```
### Dependencies
```
npm install material-ui --save
```


### Import package ( ES6 )

```javascript
import Tags from 'react-material-tags';
```

### Use in component

```jsx
<Tags defTags={defTags} button={{child: <ActionGrade />}} sourceTags={sourceTags} />
```

### Available props

```javascript

Tags.propTypes = {
  defTags: React.PropTypes.array, //start tags
  sourceTags:React.PropTypes.array, //tags created before and used in autocomplete
  onlyFromSource:React.PropTypes.bool, //if true it will not allow to add tag which not exists in tag list
  onlyFromSourceErrorText:React.PropTypes.string, //error info when onlyFromSource is on true and user wants add other tag
  textField:React.PropTypes.object, //textField props
  chip:React.PropTypes.object, //chip props
  containerClassName:   React.PropTypes.string, //class for container
  containerStyle: React.PropTypes.object, //style for container
  onRemove: React.PropTypes.func, //remove, delete tag callback function(removedTag,allTags)
  onAdd: React.PropTypes.func, //add callback  function(addedTag,allTags)
  button: React.PropTypes.object //button props - it has child prop inside

};

```
